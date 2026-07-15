import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { ProjectItem, PROJECTS } from '../../core/constants/portfolio-content';
import { staggerRevealAnimation } from '../../core/utils/portfolio-animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealOnScrollDirective],
  animations: [staggerRevealAnimation],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly visible = signal(false);
  readonly projects = PROJECTS;
  readonly selectedProject = signal<ProjectItem | null>(null);
  readonly activeMediaIndex = signal(0);
  readonly fillsContainer = signal(false);

  @ViewChild('mediaScroll') mediaScrollRef?: ElementRef<HTMLDivElement>;

  openProject(project: ProjectItem, dialog: HTMLDialogElement): void {
    this.selectedProject.set(project);
    this.activeMediaIndex.set(0);
    dialog.showModal();
    this.lockBodyScroll();
    project.media.forEach((item) => {
      if (item.type !== 'video') {
        const img = new Image();
        img.src = item.src;
      }
    });
  }

  onMediaLoad(event: Event): void {
    const el = event.target as HTMLImageElement | HTMLVideoElement;
    const container = this.mediaScrollRef?.nativeElement;

    if (!container) return;

    const mediaWidth =
      el instanceof HTMLImageElement ? el.naturalWidth : el.videoWidth;

    const mediaHeight =
      el instanceof HTMLImageElement ? el.naturalHeight : el.videoHeight;

    const mediaRatio = mediaWidth / mediaHeight;
    const containerRatio = container.clientWidth / container.clientHeight;

    this.fillsContainer.set(mediaRatio > containerRatio);
  }
  closeProject(): void {
    this.selectedProject.set(null);
    this.unlockBodyScroll();
  }

  nextMedia(project: ProjectItem): void {
    const total = project.media.length;
    this.activeMediaIndex.update((i) => (i + 1) % total);
    this.resetMediaScroll();
  }

  prevMedia(project: ProjectItem): void {
    const total = project.media.length;
    this.activeMediaIndex.update((i) => (i - 1 + total) % total);
    this.resetMediaScroll();
  }

  setMedia(index: number): void {
    this.activeMediaIndex.set(index);
    this.resetMediaScroll();
  }

  private resetMediaScroll(): void {
    if (this.mediaScrollRef) {
      this.mediaScrollRef.nativeElement.scrollTop = 0;
    }
  }

  stackPreview(project: ProjectItem): string[] {
    return project.stack.slice(0, 4);
  }

  stackOverflow(project: ProjectItem): number {
    return Math.max(project.stack.length - 4, 0);
  }

  private lockBodyScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private unlockBodyScroll(): void {
    document.body.style.overflow = '';
  }
}

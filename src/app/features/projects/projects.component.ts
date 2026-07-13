import { Component, signal } from '@angular/core';
import { ProjectItem, PROJECTS } from '../../core/constants/portfolio-content';
import { staggerRevealAnimation } from '../../core/utils/portfolio-animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealOnScrollDirective],
  animations: [staggerRevealAnimation],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  readonly visible = signal(false);
 readonly projects = PROJECTS;
  readonly selectedProject = signal<ProjectItem | null>(null);

  private scrollY = 0;

  openProject(project: ProjectItem, dialog: HTMLDialogElement): void {
    this.selectedProject.set(project);
    dialog.showModal();
    this.lockBodyScroll();
  }

  closeProject(): void {
    this.selectedProject.set(null);
    this.unlockBodyScroll();
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
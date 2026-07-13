import {
  AfterViewInit,
  Component,
  DestroyRef,
  HostListener,
  OnDestroy,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { NAV_LINKS } from '../../core/constants/portfolio-content';
import { ScrollToSectionDirective } from '../../shared/directives/scroll-to-section.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, ScrollToSectionDirective],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  readonly links = NAV_LINKS;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly activeSection = signal<string>(this.links[0]?.href.slice(1) ?? '');

  private observer?: IntersectionObserver;

  private readonly visibleRatios = new Map<string, number>();

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 16);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1024) {
      this.closeMenu();
    }
  }

  ngAfterViewInit(): void {
    this.setupObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  private setupObserver(): void {
    const sections = this.links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) {
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          this.activeSection.set(visible[0].target.id);
        }
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      },
    );

    sections.forEach((section) => this.observer?.observe(section));
  }
}

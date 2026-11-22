import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { NAV_LINKS } from '../../core/constants/portfolio-content';
import { ScrollToSectionDirective } from '../../shared/directives/scroll-to-section.directive';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, ScrollToSectionDirective],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  readonly themeService = inject(ThemeService);
  readonly links = NAV_LINKS;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly menuVisible = signal(false);
  readonly activeSection = signal<string>(this.links[0]?.href.slice(1) ?? '');

  @ViewChildren('navLink')
  navLinks?: QueryList<ElementRef<HTMLButtonElement>>;

  private observer?: IntersectionObserver;
  private navigationLock = false;
  private navigationTimer?: ReturnType<typeof setTimeout>;
  private indicatorFrame?: number;
  private menuPreviousOverflow = '';
  private menuCloseTimer?: ReturnType<typeof setTimeout>;
  private menuOpenFrame?: number;

  private readonly visibleSections = new Map<string, IntersectionObserverEntry>();

  readonly indicatorLeft = signal(0);
  readonly indicatorWidth = signal(0);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 16);
    if (window.scrollY < 32 && !this.navigationLock) {
      this.activeSection.set(this.links[0]?.href.slice(1) ?? '');
      this.updateIndicator();
    } else if (!this.navigationLock &&
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      const contactId = 'contacto';
      this.activeSection.set(contactId);
      this.updateIndicator();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1024) {
      this.closeMenu();
    }
    this.updateIndicator();
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.menuVisible()) {
      this.closeMenu();
    }
  }

  ngAfterViewInit(): void {
    this.setupObserver();
    this.navLinks?.changes.subscribe(() => this.updateIndicator());
    this.updateIndicator();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.navigationTimer) {
      clearTimeout(this.navigationTimer);
    }
    if (this.indicatorFrame) {
      cancelAnimationFrame(this.indicatorFrame);
    }
    if (this.menuCloseTimer) {
      clearTimeout(this.menuCloseTimer);
    }
    if (this.menuOpenFrame) {
      cancelAnimationFrame(this.menuOpenFrame);
    }
    document.body.style.overflow = this.menuPreviousOverflow;
  }

  toggleMenu(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    } else {
      if (this.menuCloseTimer) {
        clearTimeout(this.menuCloseTimer);
        this.menuCloseTimer = undefined;
      }
      this.menuPreviousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      this.menuVisible.set(true);
      this.menuOpen.set(false);
      if (this.menuOpenFrame) {
        cancelAnimationFrame(this.menuOpenFrame);
      }
      this.menuOpenFrame = requestAnimationFrame(() => {
        this.menuOpenFrame = requestAnimationFrame(() => {
          this.menuOpen.set(true);
          this.menuOpenFrame = undefined;
        });
      });
    }
  }

  closeMenu(): void {
    if (!this.menuVisible()) {
      return;
    }
    if (this.menuOpenFrame) {
      cancelAnimationFrame(this.menuOpenFrame);
      this.menuOpenFrame = undefined;
    }
    this.menuOpen.set(false);
    document.body.style.overflow = this.menuPreviousOverflow;
    if (this.menuCloseTimer) {
      clearTimeout(this.menuCloseTimer);
    }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.menuCloseTimer = setTimeout(() => {
      this.menuVisible.set(false);
      this.menuCloseTimer = undefined;
    }, reduceMotion ? 0 : 400);
  }

  setActiveSection(sectionId: string): void {
    this.activeSection.set(sectionId);
    this.navigationLock = true;
    this.updateIndicator();

    if (this.navigationTimer) {
      clearTimeout(this.navigationTimer);
    }
    this.navigationTimer = setTimeout(() => {
      this.navigationLock = false;
      this.syncActiveSection();
    }, 950);
  }

  private updateIndicator(): void {
    if (this.indicatorFrame) {
      cancelAnimationFrame(this.indicatorFrame);
    }
    this.indicatorFrame = requestAnimationFrame(() => {
      const activeId = this.activeSection();
      const activeLink = this.navLinks
        ?.toArray()
        .find((item) => item.nativeElement.dataset['section'] === activeId);

      if (!activeLink) {
        return;
      }

      const nav = activeLink.nativeElement.parentElement;
      if (!nav) {
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.nativeElement.getBoundingClientRect();
      this.indicatorLeft.set(linkRect.left - navRect.left);
      this.indicatorWidth.set(linkRect.width);
    });
  }

  private syncActiveSection(): void {
    if (window.scrollY < 32) {
      this.activeSection.set(this.links[0]?.href.slice(1) ?? '');
      this.updateIndicator();
      return;
    }

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      this.activeSection.set('contacto');
      this.updateIndicator();
      return;
    }

    const marker = window.innerHeight * 0.35;
    const active = [...this.visibleSections.values()].sort((a, b) => {
      const distanceA = Math.abs(a.boundingClientRect.top - marker);
      const distanceB = Math.abs(b.boundingClientRect.top - marker);
      return distanceA - distanceB;
    })[0];

    if (active) {
      this.activeSection.set(active.target.id);
      this.updateIndicator();
    }
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.visibleSections.set(entry.target.id, entry);
          } else {
            this.visibleSections.delete(entry.target.id);
          }
        });

        if (this.navigationLock) {
          return;
        }

        if (window.scrollY < 32) {
          this.activeSection.set(this.links[0]?.href.slice(1) ?? '');
          this.updateIndicator();
          return;
        }

        this.syncActiveSection();
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => this.observer?.observe(section));
  }
}

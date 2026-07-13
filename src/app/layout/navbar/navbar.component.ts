import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { NAV_LINKS } from '../../core/constants/portfolio-content';
import { ScrollToSectionDirective } from '../../shared/directives/scroll-to-section.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, ScrollToSectionDirective],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  readonly links = NAV_LINKS;

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

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

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
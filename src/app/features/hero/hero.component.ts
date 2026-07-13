import { Component, signal } from '@angular/core';
import { sectionRevealAnimation } from '../../core/utils/portfolio-animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { ScrollToSectionDirective } from '../../shared/directives/scroll-to-section.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealOnScrollDirective, ScrollToSectionDirective],
  animations: [sectionRevealAnimation],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  readonly visible = signal(false);
}
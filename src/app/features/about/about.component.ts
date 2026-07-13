import { Component, signal } from '@angular/core';
import { HIGHLIGHTS } from '../../core/constants/portfolio-content';
import { sectionRevealAnimation } from '../../core/utils/portfolio-animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealOnScrollDirective],
  animations: [sectionRevealAnimation],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly visible = signal(false);
  readonly highlights = HIGHLIGHTS;
}
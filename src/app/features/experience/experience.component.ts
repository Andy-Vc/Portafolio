import { Component, signal } from '@angular/core';
import { EXPERIENCE } from '../../core/constants/portfolio-content';
import { staggerRevealAnimation } from '../../core/utils/portfolio-animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealOnScrollDirective],
  animations: [staggerRevealAnimation],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  readonly visible = signal(false);
  readonly entries = EXPERIENCE;
}
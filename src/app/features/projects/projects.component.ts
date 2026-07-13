import { Component, signal } from '@angular/core';
import { PROJECTS } from '../../core/constants/portfolio-content';
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
}
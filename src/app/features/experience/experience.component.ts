import { Component, signal } from '@angular/core';
import { EXPERIENCE, ExperienceProject } from '../../core/constants/portfolio-content';
import { staggerRevealAnimation } from '../../core/utils/portfolio-animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealOnScrollDirective, CommonModule],
  animations: [staggerRevealAnimation],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  readonly visible = signal(false);
  readonly experience = EXPERIENCE;

  stackLabel(project: ExperienceProject): string {
    return project.technologies?.join(', ') ?? '';
  }
  
}
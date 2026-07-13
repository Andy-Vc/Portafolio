import { Component, signal } from '@angular/core';
import { STACK_GROUPS } from '../../core/constants/portfolio-content';
import { staggerRevealAnimation } from '../../core/utils/portfolio-animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { TechIconComponent } from '../../shared/components/tech-icon/tech-icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealOnScrollDirective, TechIconComponent],
  animations: [staggerRevealAnimation],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  readonly visible = signal(false);
  readonly groups = STACK_GROUPS;
}
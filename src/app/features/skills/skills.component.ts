import { Component, signal } from '@angular/core';
import { STACK_GROUPS } from '../../core/constants/portfolio-content';
import { staggerRevealAnimation } from '../../core/utils/portfolio-animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { TechIconComponent } from '../../shared/components/tech-icon/tech-icon.component';

const GROUP_ACCENT: Record<string, string> = {
  Frontend: 'bg-violet-500/10 text-violet-300 ring-1 ring-inset ring-violet-500/20',
  Backend: 'bg-sky-500/10 text-sky-300 ring-1 ring-inset ring-sky-500/20',
  'Bases de datos': 'bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20',
  DevOps: 'bg-amber-500/10 text-amber-300 ring-1 ring-inset ring-amber-500/20',
  Mobile: 'bg-pink-500/10 text-pink-300 ring-1 ring-inset ring-pink-500/20',
  Herramientas: 'bg-slate-500/10 text-slate-300 ring-1 ring-inset ring-slate-500/20'
};

const BASE_BADGE_CLASSES = 'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl';

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

  groupAccentClasses(title: string): string {
    const accent =
      GROUP_ACCENT[title] ?? 'bg-surface-secondary text-foreground-muted ring-1 ring-inset ring-surface-border';
    return `${BASE_BADGE_CLASSES} ${accent}`;
  }
}
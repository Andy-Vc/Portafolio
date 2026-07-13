import { Component, signal } from '@angular/core';
import { staggerRevealAnimation } from '../../core/utils/portfolio-animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { CertificationItem, CERTIFICATIONS } from '../../core/constants/portfolio-content';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [RevealOnScrollDirective],
  animations: [staggerRevealAnimation],
  templateUrl: './certificates.component.html'
})
export class CertificatesComponent {
  readonly visible = signal(false);
  readonly certifications = CERTIFICATIONS;

  categoryAccentClasses(category: CertificationItem['category']): string {
    const base = 'flex h-11 w-11 items-center justify-center rounded-xl border';
    switch (category) {
      case 'Bases de datos':
        return `${base} border-blue-400/20 bg-blue-400/10 text-blue-300`;
      case 'DevOps':
        return `${base} border-cyan-400/20 bg-cyan-400/10 text-cyan-300`;
      case 'Cloud':
        return `${base} border-violet-400/20 bg-violet-400/10 text-violet-300`;
      default:
        return `${base} border-surface-border bg-surface-secondary text-foreground-secondary`;
    }
  }
}
import { Component, signal } from '@angular/core';
import { GITHUB_REPOS } from '../../core/constants/portfolio-content';
import { staggerRevealAnimation } from '../../core/utils/portfolio-animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [RevealOnScrollDirective],
  animations: [staggerRevealAnimation],
  templateUrl: './certificates.component.html'
})
export class CertificatesComponent {
  readonly visible = signal(false);
  readonly repos = GITHUB_REPOS;
}
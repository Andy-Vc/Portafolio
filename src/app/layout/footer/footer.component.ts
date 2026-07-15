import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../core/constants/portfolio-content';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly socials = SOCIAL_LINKS;
  readonly year = new Date().getFullYear();
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

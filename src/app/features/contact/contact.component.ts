import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SOCIAL_LINKS } from '../../core/constants/portfolio-content';
import { sectionRevealAnimation } from '../../core/utils/portfolio-animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealOnScrollDirective],
  animations: [sectionRevealAnimation],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  readonly visible = signal(false);
  readonly sent = signal(false);
  readonly socials = SOCIAL_LINKS;
}
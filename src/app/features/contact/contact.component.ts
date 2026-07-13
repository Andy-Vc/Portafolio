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
  private readonly formBuilder = inject(FormBuilder);

  readonly visible = signal(false);
  readonly sent = signal(false);
  readonly socials = SOCIAL_LINKS;

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(4)]],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sent.set(true);
    this.form.reset();
  }
}
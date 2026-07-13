import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

const sectionBaseStyles = style({
  opacity: 0,
  transform: 'translateY(28px)'
});

const sectionVisibleStyles = style({
  opacity: 1,
  transform: 'translateY(0)'
});

export const sectionRevealAnimation = trigger('sectionReveal', [
  transition('hidden => visible', [sectionBaseStyles, animate('420ms cubic-bezier(0.2, 0.8, 0.2, 1)', sectionVisibleStyles)]),
  transition('void => visible', [sectionBaseStyles, animate('420ms cubic-bezier(0.2, 0.8, 0.2, 1)', sectionVisibleStyles)])
]);

export const heroRevealAnimation = trigger('heroReveal', [
  transition('hidden => visible', [
    style({ opacity: 0, transform: 'translateY(24px) scale(0.98)' }),
    animate('480ms cubic-bezier(0.2, 0.8, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
  ])
]);

export const staggerRevealAnimation = trigger('staggerReveal', [
  transition('hidden => visible', [
    query(
      '.stagger-item',
      [
        style({ opacity: 0, transform: 'translateY(18px) scale(0.98)' }),
        stagger(90, [animate('320ms cubic-bezier(0.2, 0.8, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))])
      ],
      { optional: true }
    )
  ])
]);
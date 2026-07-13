import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollToSection]',
  standalone: true
})
export class ScrollToSectionDirective {
  @Input('appScrollToSection') targetId = '';

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = document.getElementById(this.targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  }
}
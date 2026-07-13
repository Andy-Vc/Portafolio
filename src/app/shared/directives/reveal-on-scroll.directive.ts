import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, NgZone, OnDestroy, Output, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() threshold = 0.2;
  @Output() appRevealOnScroll = new EventEmitter<void>();

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;

          if (!entry?.isIntersecting) {
            return;
          }

          this.zone.run(() => this.appRevealOnScroll.emit());
          this.observer?.disconnect();
        },
        { threshold: this.threshold }
      );

      this.observer.observe(this.host.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
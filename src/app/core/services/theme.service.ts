import { DestroyRef, Injectable, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  private readonly mediaQueryListener = (event: MediaQueryListEvent) => {
    if (!this.hasStoredPreference()) {
      this.applyTheme(event.matches ? 'light' : 'dark');
    }
  };

  readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    this.mediaQuery.addEventListener('change', this.mediaQueryListener);
    this.destroyRef.onDestroy(() => {
      this.mediaQuery.removeEventListener('change', this.mediaQueryListener);
    });
    this.applyTheme(this.theme());
  }

  toggleTheme(): void {
    const nextTheme: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    this.applyTheme(nextTheme);
  }

  private getInitialTheme(): Theme {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return this.mediaQuery.matches ? 'light' : 'dark';
  }

  private hasStoredPreference(): boolean {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'light' || stored === 'dark';
  }

  private applyTheme(theme: Theme): void {
    this.theme.set(theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;

    const metaThemeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    metaThemeColor?.setAttribute('content', theme === 'light' ? '#F4F3F0' : '#17191D');
  }
}

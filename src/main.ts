import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener(
  'load',
  () => {
    if (window.location.hash) {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  },
  { once: true }
);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

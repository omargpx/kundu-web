import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';


Sentry.init({
  dsn: 'https://2fdc54004e1d42bbb6a5cdfa7ba43518@o1356482.ingest.sentry.io/4504093242884096',
  integrations: [
    new BrowserTracing({
      tracingOrigins: ['localhost', 'https://yourserver.io/api'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});



if (environment.production) {
  environment.info('prod');
  enableProdMode();
}
environment.info('dev');

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

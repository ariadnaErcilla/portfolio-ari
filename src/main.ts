import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { polyfill } from 'smoothscroll-polyfill'

if (environment.production) {
  enableProdMode();
}

polyfill();
platformBrowserDynamic().bootstrapModule(AppModule);
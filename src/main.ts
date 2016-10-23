import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/module';

if ('production' === process.env.ENV) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule);

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './components/module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule);

/**
 * The application code downloaded to the browser is much smaller than the dynamic equivalent
 * and it is ready to execute immediately. The performance boost can be significant.
 */
// // The browser platform without a compiler
// import { platformBrowser } from '@angular/platform-browser';
// import { AppModuleFactory } from './components/factory';
// // Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleFactory);

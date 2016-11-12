/**
 * @license
 * Copyright daggerok. All rights reserved.
 *
 * Use of this source code is governed by a ISC-style license
 * that can be found in the LICENSE file. at https://github.com/daggerok/angular2/LICENSE
 */
// // we are using webpack instead
// import './polyfills.ts';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app';

if ('production' === process.env.ENV) {
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
// import { AppModuleFactory } from './app/factory';
// // Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleFactory);
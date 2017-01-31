// The browser platform with a compiler:
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

if (['production', 'ghpages'].filter((env: string) => env === process.env.NODE_ENV).length > 0) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(console.error);

// // and it is ready to execute immediately. The performance boost can be significant.
// // The browser platform without a compiler:
// import { platformBrowser } from '@angular/platform-browser';
// import { AppModuleFactory } from './app/factory';
// // Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleFactory);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(
    ok => console.log('app is running'),
    err => console.error('too bad =(', err)
  );

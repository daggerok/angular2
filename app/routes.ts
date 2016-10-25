import { RouterModule } from '@angular/router';

import { AppHomeComponent }   from './app-pages/app-home/component';
import { AppAboutComponent }   from './app-pages/app-about/component';

export const routing = RouterModule.forRoot([
  { path: '', component: AppHomeComponent, },
  { path: 'about', component: AppAboutComponent, },
]);

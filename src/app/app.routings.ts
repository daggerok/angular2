import { RouterModule }   from '@angular/router';

import { HomeComponent } from './home';

export const Material2Routings = RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent
  }
]);

import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

export const Material2Routes = RouterModule.forRoot([
  {
    path: '',
    component: TodoComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
]);

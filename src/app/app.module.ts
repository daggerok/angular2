import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first.component';
import { SecondComponent } from './components/second.component';

function errorHandler(err: any) {
  console.error(err);
}

const AppRoutes = RouterModule.forRoot([
  {
    path: '',
    component: FirstComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
], { errorHandler });

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
  ],
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}

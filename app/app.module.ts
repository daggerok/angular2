import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { AppNavbarComponent }   from './app-navbar/component';
import { AppContentComponent }   from './app-content/component';
import { AppFooterComponent }   from './app-footer/component';
import { AppHomeComponent }   from './app-pages/app-home/component';
import { AppAboutComponent }   from './app-pages/app-about/component';
import { routing }  from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    routing,
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppContentComponent,
    AppFooterComponent,
    AppHomeComponent,
    AppAboutComponent,
  ],
})
export class AppModule {
}

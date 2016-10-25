import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppNavbarComponent }   from './app-navbar/component';
import { AppContentComponent }   from './app-content/component';
import { AppFooterComponent }   from './app-footer/component';

@NgModule({
  imports:      [ BrowserModule ],
  bootstrap:    [ AppComponent ],
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppContentComponent,
    AppFooterComponent,
  ],
})
export class AppModule {}

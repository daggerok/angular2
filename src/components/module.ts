import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent }  from './app/component';
import { clock, people } from '../reducers';
import { AppClockComponent } from './app-clock/component';
import { AppPeopleComponent } from './app-people/component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.provideStore({ clock, people })
  ],
  declarations: [
    AppComponent,
    AppClockComponent,
    AppPeopleComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

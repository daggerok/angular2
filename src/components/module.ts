import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent }  from './app/component';
import { clock } from '../reducers/app';
import { AppClockComponent } from './app-clock/component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.provideStore({ clock })
  ],
  declarations: [ AppComponent, AppClockComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

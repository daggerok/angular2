import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { MdToolbar } from '@angular2-material/toolbar/toolbar';
import { MdCard } from '@angular2-material/card/card';
import { MdInput } from '@angular2-material/input/input';
import { MdIcon } from '@angular2-material/icon/icon';
import { MdCheckbox } from '@angular2-material/checkbox/checkbox';
import { MdButton } from '@angular2-material/button/button';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Material2Routings } from './app.routings';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MdToolbar,
    MdCard,
    MdInput,
    MdIcon,
    MdCheckbox,
    MdButton,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Material2Routings,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

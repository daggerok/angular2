import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { Material2Routes } from './app.routes';

import { HomeComponent } from './home/home.component';
import { DialogComponent } from './home/dialog/dialog.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    TodoComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    Material2Routes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

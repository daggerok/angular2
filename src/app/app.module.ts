import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// // deprecated:
// import { MdToolbar } from '@angular2-material/toolbar/toolbar';
// import { MdCard } from '@angular2-material/card/card';
// import { MdInput } from '@angular2-material/input/input';
// import { MdIcon } from '@angular2-material/icon/icon';
// import { MdCheckbox } from '@angular2-material/checkbox/checkbox';
// import { MdButton } from '@angular2-material/button/button';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { Material2Routings } from './app.routings';

import { HomeComponent } from './home/home.component';
import { DialogComponent } from './home/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    // // deprecated
    // MdToolbar,
    // MdCard,
    // MdInput,
    // MdIcon,
    // MdCheckbox,
    // MdButton,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    Material2Routings,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

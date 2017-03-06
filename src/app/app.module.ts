import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// // import { HttpModule } from '@angular/http';
// // import { FormsModule } from '@angular/forms';
// import {
//   AccordionModule,
//   MenuItem,
// } from 'primeng/primeng';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { AppComponent }  from './app.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    InputTextModule,
    AppRoutes,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

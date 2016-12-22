import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ChatService } from './services/chat.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [
    ChatService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}

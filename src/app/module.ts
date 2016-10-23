import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app';
import { AppBindingsComponent } from './components/app-bindings/component';

@NgModule({
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AppBindingsComponent,
  ],
})
export class AppModule {}

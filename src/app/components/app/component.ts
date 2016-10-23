import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h2>hi, {{ name }}!</h2>`
})
export class AppComponent {
  name = 'badass';
}

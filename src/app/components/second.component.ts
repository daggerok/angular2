import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `<p>hi, {{ name }}!</p>`,
})
export class SecondComponent {
  public name = 'second badass';
}

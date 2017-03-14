import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `<p>hi, {{ name }}!</p>`,
})
export class FirstComponent {
  public name = 'badass';
}

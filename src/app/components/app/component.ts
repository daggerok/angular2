import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h2>hi, {{ name }}!</h2>
    <app-bindings (clicked)="handleClickMe($event)" [message]="'hey!'"></app-bindings>
  `
})
export class AppComponent {
  name: string = 'badass';

  public handleClickMe(value: any) {
    console.log('received', value);
  }
}

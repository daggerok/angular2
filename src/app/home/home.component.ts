import { Component } from '@angular/core';

import './home.component.styl';

@Component({
  selector: 'wp2-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private defaultName = () => 'badass';

  public name: string = this.defaultName();

  public log(event: KeyboardEvent): void {

    const inputElement = <HTMLInputElement>event.target;
    const trimmed = (inputElement.value || '').trim();

    this.name = trimmed.length > 0 ? trimmed : this.defaultName();
    inputElement.value = '';
  }
}

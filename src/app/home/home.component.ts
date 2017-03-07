import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public message: string = HomeComponent.defaultMessage();

  private static defaultMessage = () => 'home works!';

  constructor() {}

  public ngOnInit() {}

  public setMessage(event: KeyboardEvent): void {

    const input = <HTMLInputElement>event.target;
    const message = (input.value || '').trim();

    this.message = message.length > 0 ? message : HomeComponent.defaultMessage();
    input.value = '';
  }
}

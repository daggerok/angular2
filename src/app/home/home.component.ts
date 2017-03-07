import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

interface Model {
  message?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  public version: any;
  public model: Model = {};

  private static defaultMessage = () => 'home works!';

  constructor(private http: Http) {}

  public ngOnInit() {
    this.model.message = HomeComponent.defaultMessage();
    // this.http.get('https://api.github.com/users/daggerok')
    //   .map(resp => resp.json())
    //   .subscribe(ok => this.version = ok);
  }

  public setMessage(event: any): void {
    const input = event.target;
    const trimmed = input.value.trim();
    this.model.message = trimmed.length > 0
      ? trimmed : HomeComponent.defaultMessage();
    event.target.value = '';
  }
}

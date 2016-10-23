import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-2-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  name = 'badass';
  constructor() {}
  public ngOnInit() {}
}

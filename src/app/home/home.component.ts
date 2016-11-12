import { Component, OnInit } from '@angular/core';

import './home.component.styl';

@Component({
  selector: 'angular-2-home',
  templateUrl: './home.component.html',
  // styles: [require('./home.component.styl').toString()],
})
export class HomeComponent implements OnInit {
  name = 'badass';
  constructor() {}
  public ngOnInit() {}
}

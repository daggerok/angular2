import { Component, OnInit } from '@angular/core';

export class Thumbnail {
  constructor(public uri: string, public title: string) {
  }
}

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styles: [`#content { padding-top: 100px; }`],
})
export class AppComponent implements OnInit {
  private name: string;
  private thumbnails: Array<Thumbnail>;

  public ngOnInit(): void {
    this.name = 'User';
    this.thumbnails = [
      { uri: 'not-found', title: 'whatever..' },
    ];
  }
}

import {
  Component,
  OnInit, Input, Output, EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  constructor() {}
  public ngOnInit(): void {}
  public log(payload: any): void {
    console.log(`consuming: ${payload}`);
  }
}

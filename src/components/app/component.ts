import { Component } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/interval'; // accesible from vendors

import './style.styl';

@Component({
  selector: 'app',
  template: `<h4>we are up and running at least {{ clock | async }} seconds!</h4>`,
})
export class AppComponent {
  clock: Observable<number> = Observable.interval(1000);
}

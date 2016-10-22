import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// // accesible from vendors
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/map';

import './styles.styl';

@Component({
  selector: 'app',
  template: require('./template.html'),
})
export class AppComponent {
  click$: Subject<any> = new Subject();
  uptime = Observable.interval(1000);
  date = Observable.interval(1000)
                    .map(() => new Date());
  update: Observable<Date>;
  constructor() {
    // rx 1 approach:
    Observable.fromEvent(this.onUptimeClick(), 'click');
    // rx 2 approach:
    this.update = this.click$.map(() => new Date());
  }

  // ng2 approach
  public onUptimeClick(): any {

  }
}

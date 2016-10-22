import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// // accesible from vendors
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/scan';

import './styles.styl';

@Component({
  selector: 'app',
  template: require('./template.html'),
})
export class AppComponent {
  uptime = Observable.interval(1000);

  click$: Subject<any> = new Subject();
  update: Observable<Date>;
  constructor() {
    this.update =
      Observable.merge(this.click$, Observable.interval(2000))
                .startWith(new Date())
                .scan((date, acc) => {
                  const target = new Date(date.getTime());
                  target.setSeconds(date.getSeconds() + 1);
                  return target;
                });
  }
}

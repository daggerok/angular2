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
  uptime: Observable<number> = Observable.interval(1000);
  click$: any = new Subject();
  update : Observable<Date>;
  constructor() {
    this.update =
      Observable.merge(
        this.click$.mapTo('manual'),
        this.uptime.mapTo('seconds'))
                .startWith(new Date())
                .scan((acc: Date, curr: string) => {
                  const target = new Date(acc.getTime());

                  if (curr === 'manual')
                    target.setHours(target.getHours() + 1);
                  else
                    target.setSeconds(target.getSeconds() + 1);
                  return target;
                });
  }
}

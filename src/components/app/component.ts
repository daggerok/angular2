import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// // accesible from vendors
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/scan';

import './styles.styl';
import { appReducer } from '../../reducers/app/index';

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
                .scan(appReducer);
  }
}

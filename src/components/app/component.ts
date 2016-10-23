import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// // accesible from vendors
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/scan';

import './styles.styl';
import { Store, Action } from '@ngrx/store';
import { HOUR, SECOND, name } from '../../reducers/app';

@Component({
  selector: 'app',
  template: require('./template.html'),
})
export class AppComponent {
  uptime = Observable
    .interval(1000);

  click$: any = new Subject()
    .map((payloadValue) => ({ type: HOUR, payload: (+payloadValue) }));

  seconds$= Observable
    .interval(1000)
    .mapTo({ type: SECOND, payload: 5 });

  update: Observable<Date>;

  constructor(store: Store<any>) {
    this.update = store.select(name);

    Observable.merge(this.click$, this.seconds$)
              // // core.umd.js:3076 TypeError: Cannot read property 'next' of undefined
              // .subscribe(store.dispatch);
              // .subscribe(store.dispatch.bind(this));
              .subscribe(store.dispatch.bind(store));
  }
}

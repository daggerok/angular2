import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// // accesible from vendors
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/scan';

import './styles.styl';
import { Store, Action } from '@ngrx/store';
import { HOUR, SECOND, CLOCK, PEOPLE } from '../../reducers';
import { Person } from '../../domain/People';

@Component({
  selector: 'app',
  template: require('./template.html'),
})
export class AppComponent {
  uptime = Observable
    .interval(1000);

  click$: any = new Subject()
    .map((payloadValue) => ({ type: HOUR, payload: parseInt(payloadValue) }));

  seconds$= Observable
    .interval(1000)
    .mapTo({ type: SECOND, payload: 5 });

  time: Observable<Date>;

  people: Observable<Array<Person>>;

  dateFormatter: string = 'yyyy-MM-dd hh:mm:ss';

  constructor(store: Store<any>) {
    this.time = store.select(CLOCK);
    this.people = store.select(PEOPLE);

    Observable.merge(this.click$, this.seconds$)
              .subscribe(store.dispatch.bind(store));
  }
}

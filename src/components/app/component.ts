import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// // accesible from vendors
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/scan';

import './styles.styl';
import { Store } from '@ngrx/store';
import { MANUAL, SECOND } from '../../reducers/app/index';

@Component({
  selector: 'app',
  template: require('./template.html'),
})
export class AppComponent {
  uptime: Observable<number> = Observable.interval(1000);
  update : Observable<Date>;

  click$: any = new Subject();

  constructor(store: Store<any>) {
    this.update = store.select('clock');

    Observable.merge(
        this.click$
            .mapTo(MANUAL),
        this.uptime
            .mapTo(SECOND))
              .subscribe((type: string) => store.dispatch({ type, payload: 1 }));
  }
}

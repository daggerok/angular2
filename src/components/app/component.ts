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
  uptime: Observable<number> = Observable.interval(1000);
  update : Observable<Date>;

  click$: any = new Subject();

  constructor(store: Store<any>) {
    this.update = store.select(name);

    Observable.merge(
        this.click$
            .mapTo({type: HOUR, payload: 1}),
        this.uptime
            .mapTo({ type: SECOND, payload: 5 }))
              .subscribe((action: Action) => store.dispatch(action));
  }
}

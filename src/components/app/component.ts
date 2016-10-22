import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app',
  template: `<h3>hi, {{ clock | json }}!</h3>`
})
export class AppComponent {
  clock = Observable.interval(1000);
}

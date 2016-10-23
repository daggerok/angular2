import { Component, Input } from '@angular/core';
import { Person } from '../../domain/People';

@Component({
  selector: 'app-people',
  template: `
    <div class="panel" *ngFor="let person of people">
      <div class="panel-body">
        name: {{ person.name }}
        in {{ person.time }}
      </div>
    </div>
  `
})
export class AppPeopleComponent {
  @Input() people: Array<Person> = null;
}

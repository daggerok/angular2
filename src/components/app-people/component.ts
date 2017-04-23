import { Component, Input } from '@angular/core';
import { Person } from '../../domain/People';

@Component({
  selector: 'app-people',
  template: `
    <div class="panel" *ngFor="let person of people">
      name: {{ person.name }}
      in {{ person.time | date:format }}
    </div>
  `
})
export class AppPeopleComponent {
  @Input() people: Array<Person> = null;
  @Input() format: string = null;
}
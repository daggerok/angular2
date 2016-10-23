import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
    <button class="btn">
      current datetime is: {{ time | date:format }}
    </button>
  `,
})
export class AppClockComponent {
  @Input() time: Date = null;
  @Input() format: string = null;
}

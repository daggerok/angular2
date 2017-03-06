import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      padding: 2%;
    }
  `],
})
export class AppComponent {}

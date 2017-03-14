import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="body">
      <ul class="list-style-type-none">
        <li><a routerLink="/" routerLinkActive="active">first</a></li> 
        <li><a routerLink="/second" routerLinkActive="active">second</a></li> 
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .body{
      padding: 1%;
    }
    .list-style-type-none {
      list-style-type: none;
    }
    .list-style-type-none li {
      
    }
    .test-autoprefixer {
      display: flex;
    }
  `],
})
export class AppComponent {}

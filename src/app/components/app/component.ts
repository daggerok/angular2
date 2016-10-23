import { Component } from '@angular/core';
// require('./styles.styl');
import './styles.styl';

@Component({
  moduleId: AppComponent.name,
  selector: 'app',
  // template: require('./template.html'),
  templateUrl: './template.html',
  // styles: [require('./styles.styl')],
  // styles: [`h2 { color: lightblue; }`],
})
export class AppComponent {
  name = 'badass';
}

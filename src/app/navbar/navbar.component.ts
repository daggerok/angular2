import {
  Component,
  Input,
} from '@angular/core';

import { Thumbnail } from '../app.component';

@Component({
  selector: 'bw-navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent {
  @Input() name: string = null;
  @Input() thumbnails: Array<Thumbnail> = [];
}

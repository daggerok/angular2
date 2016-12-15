import {
  Component,
  OnInit, Input, Output, EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.styl']
})
export class DialogComponent implements OnInit {
  @Input() value: string;
  @Input() showPromp: string;
  @Input() placeholder: string;
  @Input() title: string;
  @Input() template: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() valueEmitted = new EventEmitter<string>();

  constructor() {
    this.okText = 'OK';
    this.cancelText = 'Cancel';
  }
  public ngOnInit(): void {}

  public emitValue(value: any) {
    console.log(`emitting ${value}`);
    if (value) {
      this.valueEmitted.emit(value);
    }
    this.value = null;
  }
}

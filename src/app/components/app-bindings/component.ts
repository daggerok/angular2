import { Component, Input, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';
import './styles.styl';
@Component({
  selector: 'app-bindings',
  templateUrl: './template.html',
})
export class AppBindingsComponent implements OnInit{
  @Input() message: string = null;
  @Output() clicked = new EventEmitter<string>();

  @ViewChild('payload')
  payload: HTMLBRElement;

  public emit(payload: string) {
    this.clicked.emit(payload);
  }

  public ngOnInit(): void {
    this.clicked.emit(JSON.stringify(this.payload));
  }
}

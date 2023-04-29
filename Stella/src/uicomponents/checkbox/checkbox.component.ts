import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent {
  @Input()
  public title: string = '';

  @Output()
  public stateChanged = new EventEmitter<boolean>();

  @Input()
  public isChecked: boolean = false;

  public clicked(): void {
    this.isChecked = !this.isChecked;
    this.stateChanged.emit(this.isChecked);
  }
}

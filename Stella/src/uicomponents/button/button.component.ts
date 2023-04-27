import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {
  constructor() { }

  @Input()
  public textOnButton: string = '';

  @Input()
  public isDisabled: boolean = false;

  @Input()
  public height: number = 40;
}

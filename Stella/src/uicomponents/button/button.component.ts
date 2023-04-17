import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorThemeClass } from 'src/colors-templates/color-theme';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {
  constructor() {
    console.log(ColorThemeClass)
  }

  @Input()
  public textOnButton: string = '';

  @Input()
  public isDisabled: boolean = false;

  @Output()
  public click = new EventEmitter<void>();

  public clicked(): void {
    this.click.emit();
    console.log('clic')
  }
}

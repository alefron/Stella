import { Component, EventEmitter, Output } from '@angular/core';
import { UserType } from './user-type.enum';

@Component({
  selector: 'app-toggle-selection',
  templateUrl: './toggle-selection.component.html',
  styleUrls: ['./toggle-selection.component.less']
})
export class ToggleSelectionComponent {
  @Output()
  public toggleSelectionChanged = new EventEmitter<UserType>();

  public selectedItemId: number = 1;

  public clickInToggle(id: number) {
    if (this.selectedItemId != id) {
      this.selectedItemId = id;
      this.toggleSelectionChanged.emit(id);
    }
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { UserType } from '../toggle-selection/user-type.enum';

@Component({
  selector: 'app-users-configuration',
  templateUrl: './users-configuration.component.html',
  styleUrls: ['./users-configuration.component.less']
})
export class UsersConfigurationComponent {
  public userIsMaster: boolean = false;
  public users: String[] = [];
  public userName: string = '';

  @Output()
  public userTypeChanged = new EventEmitter<UserType>();

  public userModeChanged(userType: UserType): void {
    this.userIsMaster = userType === UserType.Master;
    this.userTypeChanged.emit(userType);
  }
  public addUser(): void {
    this.users.push(this.userName);
  }
  public updateUserName(event: any): void {
    this.userName = event.target.value;
  }
}

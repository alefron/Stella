import { Component, EventEmitter, Output } from '@angular/core';
import { UserType } from '../toggle-selection/user-type.enum';
import { UserModel } from './user.model';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.less']
})
export class LoginWindowComponent {

  @Output()
  public gameTimeIsNow = new EventEmitter<UserModel>();

  public userModel?: UserModel = {
    userType: UserType.Ordinary
  };

  public userTypeChanged(userType: UserType): void {
    this.userModel!.userType = userType;
  }

  public startClicked(): void {
    this.gameTimeIsNow.emit(this.userModel);
  }
}

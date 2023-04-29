import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamerBoardComponent } from './gamer-board/gamer-board.component';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { UsersConfigurationComponent } from './users-configuration/users-configuration.component';
import { ToggleSelectionComponent } from './toggle-selection/toggle-selection.component';
import { ColorSelectionComponent } from './color-selection/color-selection.component';
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
  declarations: [
    GamerBoardComponent,
    CardComponent,
    ButtonComponent,
    LoginWindowComponent,
    UsersConfigurationComponent,
    ToggleSelectionComponent,
    ColorSelectionComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    GamerBoardComponent,
    LoginWindowComponent
  ]
})
export class UIComponentsModule { }

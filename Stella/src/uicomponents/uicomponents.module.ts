import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamerBoardComponent } from './gamer-board/gamer-board.component';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    GamerBoardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    GamerBoardComponent
  ]
})
export class UIComponentsModule { }

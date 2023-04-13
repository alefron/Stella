import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamerBoardComponent } from './gamer-board/gamer-board.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    GamerBoardComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GamerBoardComponent
  ]
})
export class UIComponentsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamerBoardComponent } from 'src/uicomponents/gamer-board/gamer-board.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

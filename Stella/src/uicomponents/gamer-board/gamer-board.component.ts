import { Component } from '@angular/core';
import { ColorThemeClass } from 'src/colors-templates/color-theme';


@Component({
  selector: 'app-gamer-board',
  templateUrl: './gamer-board.component.html',
  styleUrls: ['./gamer-board.component.less']
})
export class GamerBoardComponent {
  public ColorThemeClass = ColorThemeClass;

  constructor() {
    console.log(this.ColorThemeClass);
  }
}

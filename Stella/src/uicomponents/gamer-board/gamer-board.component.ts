import { Component } from '@angular/core';
import { ColorThemeService } from 'src/colors-templates/color-theme.service';

@Component({
  selector: 'app-gamer-board',
  templateUrl: './gamer-board.component.html',
  styleUrls: ['./gamer-board.component.less']
})
export class GamerBoardComponent {
  public colorThemeClass?: string;

  constructor(private _colorThemeService: ColorThemeService) {
    this.refreshColorTheme();
    this._colorThemeService.colorThemeChanged.subscribe({
      next: () => {
        this.refreshColorTheme();
      }
    })
  }

  private refreshColorTheme(): void {
    this.colorThemeClass = this._colorThemeService.colorThemeClass;
  }
}

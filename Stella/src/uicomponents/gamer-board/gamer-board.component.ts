import { Component } from '@angular/core';
import { ColorThemeService } from 'src/colors-templates/color-theme.service';

@Component({
  selector: 'app-gamer-board',
  templateUrl: './gamer-board.component.html',
  styleUrls: ['./gamer-board.component.less']
})
export class GamerBoardComponent {
  public colorThemeClass?: string;
  public countingPointsMode: boolean = false;

  constructor(private _colorThemeService: ColorThemeService) {
    this.refreshColorTheme();
    this._colorThemeService.colorThemeChanged.subscribe({
      next: () => {
        this.refreshColorTheme();
      }
    })
  }

  public enableCountingPoints(): void {
    this.countingPointsMode = true;
  }

  private refreshColorTheme(): void {
    this.colorThemeClass = this._colorThemeService.colorThemeClass;
  }
}

import { Component } from '@angular/core';
import { ColorThemeService } from 'src/colors-templates/color-theme.service';
import { CountingStarsService } from '../card/counting-stars.service';

@Component({
  selector: 'app-gamer-board',
  templateUrl: './gamer-board.component.html',
  styleUrls: ['./gamer-board.component.less']
})
export class GamerBoardComponent {
  public colorThemeClass?: string;
  public countingPointsMode: boolean = false;
  public inTheLight: boolean = true;
  public isSuccess: boolean = true;
  public selectedCardsCount = 0;
  public points = 0;
  public totalPoints = 0;

  constructor(private _colorThemeService: ColorThemeService, private _starsService: CountingStarsService) {
    this.refreshColorTheme();
    this._colorThemeService.colorThemeChanged.subscribe({
      next: () => {
        this.refreshColorTheme();
      }
    });
    this._starsService.starsCount.subscribe({
      next: (points: number) => {
        this.points = points;
      }
    })
  }

  public enableCountingPoints(): void {
    this.points = 0;
    this.isSuccess = true;
    this.inTheLight = true;
    this.countingPointsMode = true;
    this.selectedCardsCount = 0;
  }

  public enableSelection(): void {
    this.totalPoints = this.totalPoints + this.points;
    this._starsService.resetPoints();
    this.countingPointsMode = false;
  }

  public darkCheckboxChanged(isChecked: boolean) {
    this.inTheLight = !isChecked;
  }

  public cardClicked(isSelected: boolean): void {
    this.selectedCardsCount = isSelected ? this.selectedCardsCount + 1 : this.selectedCardsCount - 1;
  }

  public failureCheckboxChanged(isChecked: boolean) {
    this.isSuccess = !isChecked;
  }

  private refreshColorTheme(): void {
    this.colorThemeClass = this._colorThemeService.colorThemeClass;
  }
}

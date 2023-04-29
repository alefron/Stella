import { Component, Input } from '@angular/core';
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  @Input()
  public id: number = 1;

  @Input()
  public countingPointsMode: boolean = false;

  public isSelected: boolean = false;
  public isSelectionTime: boolean = true;

  public firstStarSelected: boolean = false;
  public secondStarSelected: boolean = false;
  public thirdStarSelected: boolean = false;

  public starOutlineCircle: string = 'url(../../assets/starOutlineCircle.png)';
  public starFillCircle: string = 'url(../../assets/starFillCircle.png)'
  public starOutline: string = 'url(../../assets/starOutline.png)';
  public starFill: string = 'url(../../assets/starFill.png)';


  public readonly pathToXImage: string = '../../assets/x.png';

  public icon = faStar;

  public cardClicked() {
    if (!this.countingPointsMode) {
      this.isSelected = !this.isSelected;
    }
  }

  public starClicked(starId: number): void {
    switch (starId) {
      case 1:
        this.firstStarSelected = !this.firstStarSelected;
        return;
      case 2:
        this.secondStarSelected = !this.secondStarSelected;
        return;
      case 3:
        this.thirdStarSelected = !this.thirdStarSelected ;
        return;
      default:
        return;
    }
  }
}

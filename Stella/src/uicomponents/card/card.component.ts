import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { faFilm, faL, faStar } from '@fortawesome/free-solid-svg-icons';
import { CountingStarsService } from './counting-stars.service';
import { StarsChangeModel } from './stars-change';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnChanges {
  @Input()
  public id: number = 1;

  @Input()
  public countingPointsMode: boolean = false;

  @Output()
  public cardSelected = new EventEmitter<boolean>();

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

  public constructor(private _starsService: CountingStarsService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['countingPointsMode']) {
      if (!changes['countingPointsMode'].currentValue) {
        this.isSelected = false;
        this.firstStarSelected = false;
        this.secondStarSelected = false;
        this.thirdStarSelected = false;
      }
    }
  }

  public cardClicked() {
    if (!this.countingPointsMode) {
      this.isSelected = !this.isSelected;
      if (this.isSelected) {
        this.cardSelected.emit(true);
      } else {
        this.cardSelected.emit(false);
      }
    }
  }

  public starClicked(starId: number): void {
    const change: StarsChangeModel = {
      previousState: {
        firstStar: this.firstStarSelected,
        secondStar: this.secondStarSelected,
        thirdStar: this.thirdStarSelected
      },
      currentState: {
        firstStar: this.firstStarSelected,
        secondStar: this.secondStarSelected,
        thirdStar: this.thirdStarSelected
      }
    }

    if (this.firstStarSelected || this.secondStarSelected || this.thirdStarSelected) {
      this.firstStarSelected = false;
      this.secondStarSelected = false;
      this.thirdStarSelected = false;
      change.currentState = {
        firstStar: false,
        secondStar: false,
        thirdStar: false
      }
    } else {
      switch (starId) {
        case 1:
            this.firstStarSelected = !this.firstStarSelected;
            this.secondStarSelected = !this.secondStarSelected;
            this.thirdStarSelected = !this.thirdStarSelected;
          break;
        case 2:
          this.secondStarSelected = !this.secondStarSelected;
          this.thirdStarSelected = !this.thirdStarSelected;
          break;
        case 3:
          this.thirdStarSelected = !this.thirdStarSelected;
          break;
        default:
          break;
      }
    }
    
    change.currentState = {
      firstStar: this.firstStarSelected,
      secondStar: this.secondStarSelected,
      thirdStar: this.thirdStarSelected
    }

    this._starsService.calculatePoints(change);
  }
}

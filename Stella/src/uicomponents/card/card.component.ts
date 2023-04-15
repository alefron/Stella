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
  public isSelected: boolean = false;
  public isSelectionTime: boolean = true;

  public readonly pathToXImage: string = '../../assets/x.png';

  public icon = faStar;

  public cardClicked() {
    this.isSelected = !this.isSelected;
  }
}

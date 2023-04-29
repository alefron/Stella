import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StarsChangeModel, StarsModel } from './stars-change';

@Injectable({
  providedIn: 'root'
})
export class CountingStarsService {

  constructor() { }

  public starsCount = new BehaviorSubject<number>(0);

  public calculatePoints(change: StarsChangeModel): void {
    const previousPoints = this.howMuchPointsFromStars(change.previousState);
    const currentPoints = this.howMuchPointsFromStars(change.currentState);
    const differencePoints = currentPoints - previousPoints;
    this.starsCount.next(this.starsCount.value + differencePoints);
  }

  public resetPoints(): void {
    this.starsCount.next(0);
  }

  private howMuchPointsFromStars(stars: StarsModel): number {
    if (stars.firstStar) {
      return 3;
    } else if (stars.secondStar) {
      return 2;
    } else if (stars.thirdStar) {
      return 1;
    }
    return 0;
  }

}

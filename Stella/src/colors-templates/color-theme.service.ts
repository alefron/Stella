import { Injectable } from '@angular/core';
import { Colors } from './Colors';

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {

  constructor() { }

  public getColorThemeClass(): string {
    const color = this.getRandomColor();
    switch (color) {
        case Colors.Blue:
            return 'blue-theme';
        case Colors.Green:
            return 'green-theme';
        case Colors.Pink:
            return 'pink-theme';
        case Colors.Purple:
            return 'purple-theme';
        case Colors.Yellow:
            return 'yellow-theme';
        case Colors.Black:
        default:
            return 'black-theme';
    }
  }

  private getRandomColor(): Colors {
      const values = Object.values(Colors).filter(value => typeof value === 'number') as Colors[];
      const randomIndex = Math.floor(Math.random() * values.length);
      return values[randomIndex];
  }
}

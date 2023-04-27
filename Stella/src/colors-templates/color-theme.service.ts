import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Color, ColorThemeDefinition } from './Colors';

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {

  constructor() { }

  public colorThemeChanged = new Subject<void>();
  public colorThemeClass?: string;
  public colorTheme?: Color;

  public getColorThemeDefinition(color?: Color): ColorThemeDefinition {
    if (!color && color != 0) {
        color = this.getRandomColor();
    }
    switch (color) {
        case Color.Blue:
            return {colorThemeClass: 'blue-theme', colorTheme: Color.Blue};
        case Color.Green:
            return {colorThemeClass: 'green-theme', colorTheme: Color.Green};
        case Color.Pink:
            return {colorThemeClass: 'pink-theme', colorTheme: Color.Pink};
        case Color.Purple:
            return {colorThemeClass: 'purple-theme', colorTheme: Color.Purple};
        case Color.Yellow:
            return {colorThemeClass: 'yellow-theme', colorTheme: Color.Yellow};
        case Color.Black:
        default:
            return {colorThemeClass: 'black-theme', colorTheme: Color.Black};
    }
  }

  public setColorTheme(colorThemeDefinition: ColorThemeDefinition): void {
    this.colorThemeClass = colorThemeDefinition.colorThemeClass;
    this.colorTheme = colorThemeDefinition.colorTheme;
    this.colorThemeChanged.next();
  }

  private getRandomColor(): Color {
      const values = Object.values(Color).filter(value => typeof value === 'number') as Color[];
      const randomIndex = Math.floor(Math.random() * values.length);
      return values[randomIndex];
  }
}

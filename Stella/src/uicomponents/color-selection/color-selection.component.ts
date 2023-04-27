import { Component } from '@angular/core';
import { ColorThemeService } from 'src/colors-templates/color-theme.service';
import { Color } from 'src/colors-templates/Colors';

@Component({
  selector: 'app-color-selection',
  templateUrl: './color-selection.component.html',
  styleUrls: ['./color-selection.component.less']
})
export class ColorSelectionComponent {

  public colorTheme?: Color;
  public Color = Color;

  public constructor(private _colorThemeService: ColorThemeService) {
    this.colorTheme = _colorThemeService.colorTheme;
    this._colorThemeService.colorThemeChanged.subscribe({
      next: () => {
        this.colorTheme = _colorThemeService.colorTheme;
      }
    })
  }

  public colorSelected(colorTheme: Color) {
    let colorThemeDefinition = this._colorThemeService.getColorThemeDefinition(colorTheme);
    this._colorThemeService.setColorTheme(colorThemeDefinition);
  }
}

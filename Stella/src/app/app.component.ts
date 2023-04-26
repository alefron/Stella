import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColorThemeClass, setColorTheme } from 'src/colors-templates/color-theme';
import { ColorThemeService } from 'src/colors-templates/color-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Stella';
  public isLoggedIn: boolean = false;
  public colorClassName?: string;

  public constructor(private _colorThemeService: ColorThemeService) {
    let className = this._colorThemeService.getColorThemeClass();
    setColorTheme(className);
    this.colorClassName = className;
  }

  public logIn() {
    this.isLoggedIn = true;
  }
}

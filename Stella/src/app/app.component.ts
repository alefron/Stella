import { Component, ElementRef, Inject } from '@angular/core';
import { ColorThemeService } from 'src/colors-templates/color-theme.service';
import { UserModel } from 'src/uicomponents/login-window/user.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public title = 'Stella';
  public isLoggedIn: boolean = false;
  public colorClassName?: string;

  private userModel?: UserModel;

  public constructor(private _colorThemeService: ColorThemeService, @Inject(DOCUMENT) private _document: Document) {
    let colorThemeDefinition = this._colorThemeService.getColorThemeDefinition();
    _colorThemeService.setColorTheme(colorThemeDefinition);
    this.refreshColorTheme();
    _colorThemeService.colorThemeChanged.subscribe({
      next: () => {
        this.refreshColorTheme();
      }
    });
  }

  public logIn() {
    this.isLoggedIn = true;
  }

  public goToGameBoard(userModel: UserModel): void {
    this.userModel = userModel;
    this.logIn();
  }

  private refreshColorTheme(): void {
    this.colorClassName = this._colorThemeService.colorThemeClass;
    this._document.body.style.backgroundColor = this._colorThemeService.getMainColorValue();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Stella';

  public constructor(private _router: Router) {
    //this._router.navigate(['gamerBoard']);
  }
}

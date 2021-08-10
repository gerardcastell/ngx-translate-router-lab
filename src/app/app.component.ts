import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-translate-router-lab';
  constructor(
    private router: Router,
    private localize: LocalizeRouterService
  ) {}

  onClick(route: '/lazy' | '/no-lazy' | '/'): void {
    this.router.navigate([this.localize.translateRoute(route)]);
  }
}

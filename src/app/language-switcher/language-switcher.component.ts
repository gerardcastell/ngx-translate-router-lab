import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit {
  constructor(private localize: LocalizeRouterService) {}

  ngOnInit(): void {}
  switchLanguage(lang: string): void {
    this.localize.changeLanguage(lang);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  LocalizeRouterModule,
  LocalizeRouterSettings,
  LocalizeParser,
  ManualParserLoader,
} from '@gilsdav/ngx-translate-router';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateRouterLoader(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings
) {
  return new ManualParserLoader(
    translate,
    location,
    settings,
    ['es', 'en'],
    'ROUTES.'
  );
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.global.json');
}

@NgModule({
  declarations: [AppComponent, LanguageSwitcherComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    RouterModule.forRoot(routes, {
      initialNavigation: 'disabled',
      relativeLinkResolution: 'legacy',
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: createTranslateRouterLoader,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
      },
      initialNavigation: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
  }
}

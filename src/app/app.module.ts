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
import { ViewComponent } from './view/view.component';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

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

export class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    public resources: { prefix: string; suffix: string }[] = [
      {
        prefix: '/assets/i18n/',
        suffix: `.json`,
      },
    ]
  ) {}
  /**
   * Gets the translations from the server
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): any {
    return forkJoin(
      this.resources.map((config) =>
        this.http.get(`${config.prefix}${lang}${config.suffix}`)
      )
    ).pipe(
      map((response) =>
        response.reduce((a: any, b: any) => {
          const obj: any = Object.assign(a, b);
          return obj;
        })
      )
    );
  }
}

export function multiTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {
      prefix: './assets/i18n/',
      suffix: '.global.json',
    },
  ]);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.global.json');
}

@NgModule({
  declarations: [AppComponent, LanguageSwitcherComponent, ViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: multiTranslateLoader,
        // useFactory: createTranslateLoader,
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
  exports: [TranslateModule],
})
export class AppModule {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
  }
}

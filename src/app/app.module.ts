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

export function createTranslateLoader(
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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(routes, {
      initialNavigation: 'disabled',
      relativeLinkResolution: 'legacy',
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: createTranslateLoader,
        deps: [
          TranslateService,
          Location,
          LocalizeRouterSettings /*, HttpClient*/,
        ],
      },
      initialNavigation: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

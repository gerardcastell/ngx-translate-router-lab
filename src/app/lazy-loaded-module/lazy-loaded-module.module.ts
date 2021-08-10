import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedModuleRoutingModule } from './lazy-loaded-module-routing.module';
import { LazyLoadedModuleComponent } from './lazy-loaded-module.component';
import { RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { routes } from '../app-routing.module';
import { LazyLoadedChildComponent } from '../lazy-loaded-child/lazy-loaded-child.component';

@NgModule({
  declarations: [LazyLoadedModuleComponent, LazyLoadedChildComponent],
  imports: [CommonModule, LazyLoadedModuleRoutingModule],
})
export class LazyLoadedModuleModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadedModuleComponent } from './lazy-loaded-module.component';

const routes: Routes = [{ path: '', component: LazyLoadedModuleComponent }];

@NgModule({
  imports: [
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class LazyLoadedModuleRoutingModule {}

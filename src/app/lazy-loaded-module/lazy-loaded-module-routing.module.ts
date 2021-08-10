import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadedChildComponent } from '../lazy-loaded-child/lazy-loaded-child.component';
import { LazyLoadedModuleComponent } from './lazy-loaded-module.component';

const routes: Routes = [
  { path: '', component: LazyLoadedModuleComponent },
  { path: 'child', component: LazyLoadedChildComponent },
];

@NgModule({
  imports: [
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class LazyLoadedModuleRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'no-lazy',
        component: ViewComponent,
      },
      {
        path: 'lazy',
        loadChildren: () =>
          import('./lazy-loaded-module/lazy-loaded-module.module').then(
            (m) => m.LazyLoadedModuleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedModuleRoutingModule } from './lazy-loaded-module-routing.module';
import { LazyLoadedModuleComponent } from './lazy-loaded-module.component';


@NgModule({
  declarations: [
    LazyLoadedModuleComponent
  ],
  imports: [
    CommonModule,
    LazyLoadedModuleRoutingModule
  ]
})
export class LazyLoadedModuleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyModuleComponent } from './lazy-module.component';
import { MaterialModule } from 'src/app/material.module';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  declarations: [LazyModuleComponent],
  imports: [CommonModule, MaterialModule, LazyRoutingModule],
})
export class LazyModuleModule {}

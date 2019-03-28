import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts/layouts.component';

@NgModule({
  declarations: [LayoutsComponent],
  imports: [
    CommonModule
  ]
  , exports: [LayoutsComponent]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HreadresComponent } from './hreadres/hreadres.component';
import { HreadresModule } from './hreadres/hreadres.module';

@NgModule({
  declarations: [HreadresComponent],
  imports: [
    CommonModule
  ],
  exports: [HreadresComponent]
})
export class LayoutsModule { }

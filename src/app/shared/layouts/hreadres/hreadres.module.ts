import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HreadresComponent } from './hreadres.component';
import { HoriontalNavComponent } from './horiontal-nav/horiontal-nav.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [HreadresComponent, HoriontalNavComponent, ProfileBarComponent, TopMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [HreadresComponent, HoriontalNavComponent, ProfileBarComponent, TopMenuComponent]
})
export class HreadresModule { }

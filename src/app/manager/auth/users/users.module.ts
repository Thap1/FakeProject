import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoleComponent } from './user-role/user-role.component';

@NgModule({
  declarations: [UserListComponent, UserRoleComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }

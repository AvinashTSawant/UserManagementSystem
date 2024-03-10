import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UserUpsertComponent, UserListComponent],
  // declarations: [ ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,


    RouterModule.forChild([
      { path: 'upsert', component: UserUpsertComponent },
      { path: 'list', component: UserListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ])
  ]
})
export class UserModule { }

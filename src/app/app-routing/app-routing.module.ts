import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from '../create-user/create-user.component';
import { UsersComponent } from '../users/users.component';
import { ViewuserComponent } from '../viewuser/viewuser.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/new',
    component: CreateUserComponent
  },
  {
    path: 'users/edit/:id',
    component: ViewuserComponent
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
  RouterModule
  ]
})
export class AppRoutingModule { }

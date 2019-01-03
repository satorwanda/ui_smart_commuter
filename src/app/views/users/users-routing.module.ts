import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewUserComponent } from './newuser.component';
import { ManageUsersComponent } from './manageusers.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        redirectTo: 'manage-users'
      },
      {
        path: 'new-user',
        component: NewUserComponent,
        data: {
          title: 'New User'
        }
      },
      {
        path: 'manage-users',
        component: ManageUsersComponent,
        data: {
          title: 'Users Management'
        }
      }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

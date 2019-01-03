import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDriverComponent } from './newdriver.component';
import { ManageDriversComponent } from './managedrivers.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Drivers'
    },
    children: [
      {
        path: '',
        redirectTo: 'manage-drivers'
      },
      {
        path: 'new-driver',
        component: NewDriverComponent,
        data: {
          title: 'New Driver'
        }
      },
      {
        path: 'manage-drivers',
        component: ManageDriversComponent,
        data: {
          title: 'Drivers Management'
        }
      }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule {}

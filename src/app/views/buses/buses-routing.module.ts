import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBusComponent } from './newbus.component';
import { ManageBusesComponent } from './managebuses.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buses'
    },
    children: [
      {
        path: '',
        redirectTo: 'manage-buses'
      },
      {
        path: 'new-bus',
        component: NewBusComponent,
        data: {
          title: 'New Bus'
        }
      },
      {
        path: 'manage-buses',
        component: ManageBusesComponent,
        data: {
          title: 'Buses Management'
        }
      }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusesRoutingModule {}

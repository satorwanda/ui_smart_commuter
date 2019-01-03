import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageStationsComponent } from './managestations.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Stations'
    },
    children: [
      {
        path: '',
        redirectTo: 'manage-stations'
      },
      {
        path: 'manage-stations',
        component: ManageStationsComponent,
        data: {
          title: 'Stations management'
        }
      }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationsRoutingModule {}

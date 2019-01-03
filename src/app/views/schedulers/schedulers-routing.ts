import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewSchedulerComponent } from './newscheduler.component';
import { HistoryComponent } from './history.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Schedulers'
    },
    children: [
      {
        path: '',
        redirectTo: 'view-history'
      },
      {
        path: 'new-scheduler',
        component: NewSchedulerComponent,
        data: {
          title: 'New Schedulers'
        }
      },
      {
        path: 'view-history',
        component: HistoryComponent,
        data: {
          title: 'Schedulers history'
        }
      }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulersRoutingModule {}

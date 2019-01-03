import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageLinesComponent} from './managelines.component';
import { ManagePricesComponent} from './manageprices.component';
import { LinesSchedulersComponent} from './linesschedulers.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Lines'
    },
    children: [
      {
        path: '',
        redirectTo: 'manage-lines'
      },
      {
        path: 'manage-lines',
        component: ManageLinesComponent,
        data: {
          title: 'Lines management'
        }
        
      },
      {
        path: 'prices',
        component: ManagePricesComponent,
        data: {
          title: 'Lines prices'
        }
        
      },
      {
        path: 'working-schedulers',
        component: LinesSchedulersComponent,
        data: {
          title: 'Working schedulers'
        }
        
      }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinesRoutingModule {}

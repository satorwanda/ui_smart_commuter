import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//new scheduler
import {NewSchedulerComponent} from './newscheduler.component';

//Schedulers history
import {HistoryComponent} from './history.component';


import { SchedulersRoutingModule } from './schedulers-routing';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        TabsModule,
        SchedulersRoutingModule,
    ],
    declarations: [
        NewSchedulerComponent,
        HistoryComponent
    ]
})
export class SchedulersModule { }
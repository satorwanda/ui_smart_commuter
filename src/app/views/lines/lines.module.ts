import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {ManageLinesComponent} from './managelines.component';
import { TabsModule } from 'ngx-bootstrap/tabs';


import { ManagePricesComponent } from './manageprices.component';
import { LinesSchedulersComponent } from './linesschedulers.component';

import { LinesRoutingModule } from './lines-routing.module';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        TabsModule,
        LinesRoutingModule,
    ],
    declarations: [
        ManageLinesComponent,
        ManagePricesComponent,
        LinesSchedulersComponent
    ]
})
export class LinesModule { }
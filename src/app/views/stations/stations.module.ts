import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//Manage stations
import {ManageStationsComponent} from './managestations.component';
import { TabsModule } from 'ngx-bootstrap/tabs';


import { StationsRoutingModule } from './stations-routing.module';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        TabsModule,
        StationsRoutingModule,
    ],
    declarations: [
        ManageStationsComponent
    ]
})
export class StationsModule { }
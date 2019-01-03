import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//new bus
import {NewBusComponent} from './newbus.component';

//Manage buses
import {ManageBusesComponent} from './managebuses.component';


import { BusesRoutingModule } from './buses-routing.module';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        BusesRoutingModule,
    ],
    declarations: [
        NewBusComponent,
        ManageBusesComponent
    ]
})
export class BusesModule { }
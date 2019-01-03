import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//new bus
import {NewDriverComponent} from './newdriver.component';

//Manage buses
import {ManageDriversComponent} from './managedrivers.component';


import { DriversRoutingModule } from './drivers-routing.module';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        DriversRoutingModule,
    ],
    declarations: [
        NewDriverComponent,
        ManageDriversComponent
    ]
})
export class DriversModule { }
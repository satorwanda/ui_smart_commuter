import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//new user
import {NewUserComponent} from './newuser.component';

//Manage users
import {ManageUsersComponent} from './manageusers.component';


import { UsersRoutingModule } from './users-routing.module';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UsersRoutingModule,
    ],
    declarations: [
        NewUserComponent,
        ManageUsersComponent
    ]
})
export class UsersModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormModule } from '../form/form.module'; 
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    RouterModule,

    FormModule
  ], 
exports: [ AuthComponent ]
})
export class AuthModule { 

}
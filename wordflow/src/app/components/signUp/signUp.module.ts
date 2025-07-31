import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormModule } from '../form/form.module'; 
import { SignUpComponent } from './signUp.component';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    RouterModule,

    FormModule
  ], 
exports: [ SignUpComponent ]
})
export class SignUpModule { 

}
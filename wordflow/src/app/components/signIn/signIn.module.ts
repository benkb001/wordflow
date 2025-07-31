import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormModule } from '../form/form.module'; 
import { SignInComponent } from './signIn.component';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterModule,

    FormModule
  ], 
exports: [ SignInComponent ]
})
export class SignInModule { 

}
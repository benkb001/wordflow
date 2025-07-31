import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './signUp.component';
import { FormComponent } from '../form/form.component';

@NgModule({
  declarations: [
    FormComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [ SignUpComponent ]
})
export class SignUpModule { }
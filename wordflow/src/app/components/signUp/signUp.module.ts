import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './signUp.component';
import { FormComponent } from '../form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ], 
exports: [ SignUpComponent ]
})
export class SignUpModule { 

}
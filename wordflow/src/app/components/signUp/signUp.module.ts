import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from '../auth/auth.module'; 
import { SignUpComponent } from './signUp.component';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule, 

    AuthModule
  ], 
exports: [ SignUpComponent ]
})
export class SignUpModule { 

}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from '../auth/auth.module'; 
import { SignInComponent } from './signIn.component';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule, 

    AuthModule
  ], 
exports: [ SignInComponent ]
})
export class SignInModule { 

}
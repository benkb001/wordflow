import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritableComponent } from './writable.component';
import { FormModule } from '../form/form.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WritableComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    
    FormModule
  ], 
exports: [ WritableComponent ]
})
export class WritableModule { 

}
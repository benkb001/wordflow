import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadableComponent } from './readable.component';


@NgModule({
  declarations: [
    ReadableComponent
  ],
  imports: [
    CommonModule
  ], 
exports: [ ReadableComponent ]
})
export class ReadableModule { 

}
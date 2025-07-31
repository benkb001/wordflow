import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickableComponent } from './clickable.component';

@NgModule({
  declarations: [
    ClickableComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [ ClickableComponent ]
})
export class ClickableModule { }
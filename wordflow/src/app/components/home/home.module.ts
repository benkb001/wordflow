import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { FooterModule } from '../footer/footer.module'; 
import { ReadableModule } from '../readable/readable.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,

    FooterModule,
    ReadableModule
  ], 
exports: [ HomeComponent ]
})
export class HomeModule { 

}
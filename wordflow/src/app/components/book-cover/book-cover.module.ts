import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookCoverComponent } from './book-cover.component';


@NgModule({
  declarations: [
    BookCoverComponent
  ],
  imports: [
    CommonModule
  ], 
exports: [ BookCoverComponent ]
})
export class BookCoverModule { 

}
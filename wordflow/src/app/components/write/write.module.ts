import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteComponent } from './write.component';

import { BookCoverModule } from '../book-cover/book-cover.module';
import { FooterModule } from '../footer/footer.module'; 
import { WritableModule } from '../writable/writable.module';


@NgModule({
  declarations: [
    WriteComponent
  ],
  imports: [
    CommonModule,

    BookCoverModule,
    FooterModule,
    WritableModule
  ], 
exports: [ WriteComponent ]
})
export class WriteModule { 

}
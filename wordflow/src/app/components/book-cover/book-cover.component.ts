import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '@wrdflow/common'; 

@Component({
    selector: 'book-cover',
    templateUrl: './book-cover.component.html'
})
export class BookCoverComponent { 
    @Input() book!: Book;

    @Output() selectBook = new EventEmitter<Book>();

    handleClick() {
        this.selectBook.emit(this.book);
    }
}
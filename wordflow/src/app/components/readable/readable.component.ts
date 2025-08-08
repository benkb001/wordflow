import { Component, Input } from '@angular/core';
import { Book, User } from '../../interfaces';

import { ApiService } from 'src/app/services/api.service';

interface BookUser {
    book: Book; 
    user: User;
}

@Component({
    selector: 'readable',
    templateUrl: './readable.component.html'
})
export class ReadableComponent { 
    book: Book | null = null; 
    author: User | null = null; 

    getRandomBook() {   
        this.api.get<BookUser>('random_book').subscribe({
            next: bookUser => {
                this.book = bookUser.book; 
                this.author = bookUser.user; 
            }, 
            error: err => {
                console.log('error getting book'); 
            }
        }); 
    }

    constructor(private api: ApiService) {
        this.getRandomBook(); 
    }
}
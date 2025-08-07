import { Component } from '@angular/core';

import { User, Book } from '@wrdflow/common'; 

import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service'; 

@Component({
    selector: 'write',
    templateUrl: './write.component.html'
})
export class WriteComponent { 
    user: User | null = null; 
    currentBook: Book | null = null; 
    books: Book[] = []; 

    constructor(
        private api: ApiService, 
        private userService: UserService, 
    ){}

    ngOnInit() {
        this.userService.user$.subscribe(user => {
            this.user = user;
            this.api.get<Book[]>(`books/${this.user?.id || 'new'}`).subscribe({
                next: books => {
                    console.log(books); 
                    this.books = books; 
                }
            }); 
        });
    }

    setCurrentBook(book: Book | null) {
        this.currentBook = book; 
    }

    setEmptyBook() {
        const book: Book = {
            id: '',
            author_id: '', 
            content: '', 
            title: ''
        }
        this.currentBook = book;
    }
}
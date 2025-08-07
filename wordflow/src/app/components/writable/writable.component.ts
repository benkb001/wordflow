import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as toastr from 'toastr'; 

import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service'; 
import { Book, User } from '@wrdflow/common'; 
@Component({
    selector: 'writable',
    templateUrl: './writable.component.html'
})
export class WritableComponent {
    form: FormGroup; 
    user: User | null = null; 
    @Input() book: Book | null = null;

    @Output() selectBook = new EventEmitter<Book | null>();

    constructor(
        private api: ApiService, 
        private userService: UserService, 
        private fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            title: ['', Validators.required], 
            content: ['', Validators.required], 
        }, { 
            updateOn: 'change' 
        }); 
    }    

    ngOnInit() {
        this.userService.user$.subscribe(user => {
            this.user = user;
        });

        if (this.book) {
            this.form.patchValue({
                title: this.book.title,
                content: this.book.content
            })
        }
    }

    onCancelClick() {
        this.selectBook.emit(null); 
    }

    handleSubmit() {
        if (this.form.valid) {
            const body = {
                ...this.form.value,
                author_id: this.user?.id, 
                id: this.book?.id || 'new'
            };
            console.log(body); 
            this.api.post<Book>('save_book', body).subscribe({
                next: book => {
                    toastr.success('Saved ' + book.title); 
                }, 
                error: err => {
                    toastr.error(err.message); 
                }
            }); 
        } else {
            console.log('invalid'); 
        }
    }
}
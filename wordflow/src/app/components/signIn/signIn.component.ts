import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import * as toastr from 'toastr'; 

@Component({
    selector: 'sign-in',
    templateUrl: './signIn.component.html'
})
export class SignInComponent { 
    form: FormGroup; 

    constructor(private api: ApiService, private fb: FormBuilder){
        this.form = this.fb.group({
            username: ['', Validators.required], 
            password: ['', Validators.required]
        }); 
    }

    handleSubmit() {
        if (this.form.valid) {
            this.api.post<number>('signin', this.form.value).subscribe({
                next: _ => {
                    toastr.success('Signed In!')
                }, 
                error: err => {
                    toastr.error(err); 
                }
            }); 
        } else {
            toastr.error('Invalid Form Submission!')
        }
    }
}
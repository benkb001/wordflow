import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import passwordMatchValidator from './signUp.validators';
import * as toastr from 'toastr'; 

@Component({
    selector: 'sign-up',
    templateUrl: './signUp.component.html'
})
export class SignUpComponent { 
    form: FormGroup; 

    constructor(private api: ApiService, private fb: FormBuilder){
        this.form = this.fb.group({
            username: ['', Validators.required], 
            password: ['', Validators.required], 
            passwordConfirm: ['', Validators.required]
        }, { 
            validators: passwordMatchValidator, 
            updateOn: 'change'
        }); 
    }

    handleSubmit() {
        console.log('handled submit'); 
        if (this.form.valid) {
            this.api.post<number>('signup', this.form.value).subscribe({
                next: _ => {
                    toastr.success('Signed Up!')
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
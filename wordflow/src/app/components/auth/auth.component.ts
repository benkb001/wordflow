import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as toastr from 'toastr'; 

import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service'; 

import passwordMatchValidator from './auth.validators';

import { User } from '@wrdflow/common'; 

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent { 
    form: FormGroup; 

    @Input() mode: 'sign-in' | 'sign-up' = 'sign-in';

    get isSignUp(): boolean {
        return this.mode === 'sign-up';
    }

    constructor(
        private api: ApiService, 
        private userService: UserService, 
        private fb: FormBuilder, 
        private router: Router
    ) {
        this.form = this.fb.group({
            username: ['', Validators.required], 
            password: ['', Validators.required], 
            ...(this.isSignUp && {passwordConfirm: ['', Validators.required]})
        }, { 
            ...(this.isSignUp && {validators: passwordMatchValidator}), 
            updateOn: 'change'
        }); 
    }

    handleSubmit() {
        if (this.form.valid) {
            this.api.post<User>(this.mode, this.form.value).subscribe({
                next: user => {
                    this.userService.login(user); 
                    this.router.navigateByUrl('/home');
                }, 
                error: err => {
                    toastr.error(err.message);
                }
            }); 
        } else {
            toastr.error('Invalid Form Submission!')
        }
    }
}
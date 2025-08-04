import { Component } from '@angular/core';
import { UserService } from '../../services/user.service'; 
import { User } from '@wrdflow/common'; 

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent { 
    user: User | null = null; 

    constructor(
        private userService: UserService, 
    ){}

    ngOnInit() {
        this.userService.user$.subscribe(user => {
            this.user = user;
        });
    }
}
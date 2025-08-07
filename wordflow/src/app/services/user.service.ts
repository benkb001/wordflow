import { Injectable } from '@angular/core'; 
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@wrdflow/common'; 
@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly storageKey = 'loggedInUser'; 
    private userSubject = new BehaviorSubject<User | null>(this.getStoredUser()); 

    user$: Observable<User | null> = this.userSubject.asObservable(); 

    constructor(){}

    login(user: User) {
        this.userSubject.next(user); 
        localStorage.setItem(this.storageKey, JSON.stringify(user)); 
    }

    getStoredUser() {
        const data = localStorage.getItem(this.storageKey); 
        return data ? JSON.parse(data) : null; 
    }
}
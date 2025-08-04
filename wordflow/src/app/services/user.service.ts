import { Injectable } from '@angular/core'; 
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@wrdflow/common'; 
@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userSubject = new BehaviorSubject<User | null>(null); 

    user$: Observable<User | null> = this.userSubject.asObservable(); 

    constructor(){}

    login(user: User) {
        this.userSubject.next(user); 
    }
}
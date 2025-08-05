import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = environment.apiBaseUrl; 

    constructor(private http: HttpClient){}

    get<T>(endpoint: String): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
    }

    post<T>(endpoint: String, data: any): Observable<T> {
        console.log(data); 
        return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data);
    }
}
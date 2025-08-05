import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = window.location.origin + '/api/'; 

    constructor(private http: HttpClient){}

    get<T>(endpoint: String): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
    }

    post<T>(endpoint: String, data: any): Observable<T> {
        console.log(data); 
        return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data);
    }
}
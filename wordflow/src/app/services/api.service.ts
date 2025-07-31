import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:8080'; 

    constructor(private http: HttpClient){}

    get<T>(endpoint: String): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
    }

    post<T>(endpoint: String, data: any): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from '../models/model';

@Injectable()
export class LoginService {

  private baseUrl = 'https://scribenote.tech/';
  constructor( private http: HttpClient) { }
  loginUser(loginData: LoginData): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post(this.baseUrl + 'backend/auth/', loginData, httpOptions);
  } 
}

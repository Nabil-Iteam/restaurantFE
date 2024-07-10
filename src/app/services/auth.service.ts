import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  userURL: string = 'http://localhost:8090/api/auth/';


  login(user: any) {
    return this.http.post<{ accessToken: any }>(this.userURL + 'login', user);
  }


  register(user: any) {
    return this.http.post(this.userURL + 'signup', user);
  }
}

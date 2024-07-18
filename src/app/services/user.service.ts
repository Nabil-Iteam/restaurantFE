import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = "http://localhost:8090/api/auth";

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get(this.userURL);
  }
  
  getUserById(id: number) {
    return this.httpClient.get(`${this.userURL}/${id}`);
  }

  deleteUserById(id: number) {
    return this.httpClient.delete(`${this.userURL}/${id}`);
  } 

  updateUser(obj: any) {
    return this.httpClient.put(this.userURL, obj);
  }

  addUser(obj: any) {
    return this.httpClient.post(this.userURL, obj);
  }

  getUsersByRole(role: string) {
    return this.httpClient.get(`${this.userURL}/role/${role}`);
  }

}

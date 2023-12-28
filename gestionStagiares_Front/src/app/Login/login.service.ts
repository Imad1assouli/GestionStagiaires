// login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/login';
   isAuthenticated: boolean = false;
   authenticatedUser!:string;

  constructor(private http: HttpClient) {}

  login(username: string, password: string, role: string): Observable<Object> {
    const url=`${this.apiUrl}/login${role}`;
    return this.http.get(`${url}?username=${username}&password=${password}`);
  }

  // Checking if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
  logout(): void {
    this.isAuthenticated = false;
  }
  getAuthenticatedUser(){
    return this.authenticatedUser;
  }
}

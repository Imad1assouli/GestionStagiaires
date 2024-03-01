// login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/api';
  private loggedIn = new BehaviorSubject<boolean>(false);
  redirectUrl: string = ''; // Define the redirectUrl property

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, {  username, password }).pipe(
      tap(res => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          this.loggedIn.next(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.router.navigate(['<']);
  }

  isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return token !== null ? this.loggedIn.asObservable() : new BehaviorSubject<boolean>(false);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  getUserRole(): string {
    const user = this.getUser();
    return user ? user.role : '';
  }
  getAuthenticatedUser(){
    const user = this.getUser();
    return user ? user.nom : '';
  }
  

  }
  

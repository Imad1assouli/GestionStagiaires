// login.component.ts

import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = '';
  loginError: boolean = false;
  
  constructor(private loginService: LoginService, private router: Router) {}

  login(): void {
    this.loginService.login(this.username, this.password, this.role)
      .subscribe((result) => {
        if (result) {
          this.loginService.isAuthenticated=true;
          this.loginService.authenticatedUser=this.username;
          this.navigateToDashboard();
          
        } else {
          this.loginError = true;
          console.log('Authentication failed');
        }
      });
  }
   navigateToDashboard(): void {
    // Navigate based on the user's role
    switch (this.role) {
      case 'Admin':
        this.router.navigate(['/admin']);
        break;
      case 'AdminDRH':
        this.router.navigate(['/adminDrh']);
        break;
      case 'ChefDRH':
        this.router.navigate(['/chefDrh']);
        break;
      default:
        // Handle other roles or show an error
        console.log('Unknown role');
        break;
    }
  }

}

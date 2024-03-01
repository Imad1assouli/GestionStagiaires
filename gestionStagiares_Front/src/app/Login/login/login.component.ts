// login.component.ts

import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

 // Login Component
formSubmit() {
  if (!this.loginData.username || !this.loginData.password) {
      this.snackBar.open('Email and password are required!', 'Close', { duration: 3000 });
      return;
  }

  this.loginService.login(this.loginData.username, this.loginData.password).subscribe(
      response => {
          this.loginService.setUser(response);
          if (response.role === 'Admin') {
            this.router.navigate(['/admin/stats']);
          }
           else if (response.role === 'AdminDRH') {
              this.router.navigate(['/adminDrh/statsDRH']);
          } else if (response.role === 'ChefDRH') {
              this.router.navigate(['/chefDrh/stats']);
          } else {
              // Handle other cases or fallback logic
              
          }
      },
      error => {
          this.snackBar.open('Invalid email or password!', 'Close', { duration: 3000 });
      }
  );
}
}
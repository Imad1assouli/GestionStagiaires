// admin-acceuil.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Login/login.service';

import { LoginComponent } from 'src/app/Login/login/login.component';

@Component({
  selector: 'app-admin-acceuil',
  templateUrl: './admin-acceuil.component.html',
  styleUrls: ['./admin-acceuil.component.css']
})
export class AdminAcceuilComponent implements OnInit  {
  username!: string ;
  constructor(private loginService:LoginService,private router: Router){
  }
  ngOnInit(): void {
      this.username=this.loginService.getAuthenticatedUser();
  }
  isLoggedIn(): Observable<boolean> {
    return this.loginService.isLoggedIn();
 }

 logout(): void {
   this.loginService.logout();
   this.router.navigate(['']);
 }
  
}

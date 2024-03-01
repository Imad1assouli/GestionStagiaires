import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Login/login.service';

@Component({
  selector: 'app-acceuil-chef-drh',
  templateUrl: './acceuil-chef-drh.component.html',
  styleUrls: ['./acceuil-chef-drh.component.css']
})
export class AcceuilChefDRHComponent implements OnInit  {
  username!: string ;
  constructor(private loginService:LoginService ,private router : Router){
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

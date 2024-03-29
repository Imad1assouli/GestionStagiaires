import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Login/login.service';

@Component({
  selector: 'app-admin-drh-acceuil',
  templateUrl: './admin-drh-acceuil.component.html',
  styleUrls: ['./admin-drh-acceuil.component.css']
})
export class AdminDRHAcceuilComponent implements OnInit  {
  username!: string ;
  constructor(private loginService:LoginService,private router:Router){
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

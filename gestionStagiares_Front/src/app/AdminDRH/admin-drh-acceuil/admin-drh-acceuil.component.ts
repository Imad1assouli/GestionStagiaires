import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Login/login.service';

@Component({
  selector: 'app-admin-drh-acceuil',
  templateUrl: './admin-drh-acceuil.component.html',
  styleUrls: ['./admin-drh-acceuil.component.css']
})
export class AdminDRHAcceuilComponent implements OnInit  {
  username!: string ;
  constructor(private loginService:LoginService){
  }
  ngOnInit(): void {
      this.username=this.loginService.getAuthenticatedUser();
  }
}

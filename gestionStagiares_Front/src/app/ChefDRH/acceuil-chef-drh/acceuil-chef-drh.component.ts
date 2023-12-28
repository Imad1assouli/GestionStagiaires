import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Login/login.service';

@Component({
  selector: 'app-acceuil-chef-drh',
  templateUrl: './acceuil-chef-drh.component.html',
  styleUrls: ['./acceuil-chef-drh.component.css']
})
export class AcceuilChefDRHComponent implements OnInit  {
  username!: string ;
  constructor(private loginService:LoginService){
  }
  ngOnInit(): void {
      this.username=this.loginService.getAuthenticatedUser();
  }
}

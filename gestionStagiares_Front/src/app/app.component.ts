import { Component, OnInit } from '@angular/core';

import { LoginComponent } from './Login/login/login.component';
import { LoginService } from './Login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = "gestionStagiares_Front";
  constructor(public loginService : LoginService) {}
  

 
}

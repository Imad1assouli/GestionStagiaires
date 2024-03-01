import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Login/login.service';

@Component({
  selector: 'app-acceuil-stagiaire',
  templateUrl: './acceuil-stagiaire.component.html',
  styleUrls: ['./acceuil-stagiaire.component.css']
})
export class AcceuilStagiaireComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {
    
  }

  isLoggedIn(): Observable<boolean> {
    return this.loginService.isLoggedIn();
  }

  redirectToPage() {
      
    const userRole = this.loginService.getUserRole();
    switch (userRole) {
      case 'Admin':
        this.router.navigate(['/admin/stats']);
        break;
      case 'AdminDRH':
        this.router.navigate(['/adminDrh/statsDRH']);
        break;
      case 'ChefDRH':
        this.router.navigate(['/chefDrh/stats']);
        break;
      default:
        this.router.navigate(['/login']);
        break;
    }
    
  }
}

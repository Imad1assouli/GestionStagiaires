
// chefGuard
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';



@Injectable({
  providedIn: 'root'
})
export class chefDRHGuard implements CanActivate {

  constructor(private login: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.login.isLoggedIn() && this.login.getUserRole() === 'ChefDRH') {
      return true;
    } else {
      // Store the attempted URL for redirection after login
      this.login.redirectUrl = state.url;
      // If not authenticated or not an admin, navigate to login page
      return this.router.createUrlTree(['/login']);
    }
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate { // interface som bestemmer om en route kan aktiveres true or false
  constructor(private loginService: LoginService, private router: Router) {} // login service bliver brugt i login.comp
  // inpendecy injection

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
    let url: string = state.url; 

    return this.checkLogin(url); // kommer ind til login siden
  }

  checkLogin(url: string): boolean { // retuner
    if (this.loginService.isLoggedIn) { return true; } // tjekker om jeg er logget in

    // Store the attempted URL for redirecting
    this.loginService.redirectUrl = url; 

    this.router.navigate(['login']);
    return false;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: UserService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['usuarios/ingresar']);
    return false;
  }

}

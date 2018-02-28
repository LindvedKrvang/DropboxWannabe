import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../auth/shared/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    return this.authService.isAuthenticated()
      .map(isLogged => {
        if (!isLogged) {
          this.router.navigateByUrl('login');
        }
          return isLogged;
      });
  }
}

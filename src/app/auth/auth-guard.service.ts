import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userAuthService: UserAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userAuthService.isAuthenticated();
  }

}

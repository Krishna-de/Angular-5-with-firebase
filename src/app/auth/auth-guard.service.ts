import { AuthService } from './auth.service';
import { CanActivate, RouterStateSnapshot } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }
}
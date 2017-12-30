import { AuthService } from './auth.service';
import { CanActivate, RouterStateSnapshot, Route } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { CanLoad } from '@angular/router/src/interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate,CanLoad {
    constructor(private authService: AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }
    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean{
        return this.authService.isAuthenticated();
    }
}
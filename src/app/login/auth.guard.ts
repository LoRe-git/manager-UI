import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

export class AuthGuardService implements CanActivate{
    constructor(private authService: AuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree {
        if(this.authService.isLoggedin){
            return true;
        }
        return this.router.createUrlTree(['/login']);
    }
    
}
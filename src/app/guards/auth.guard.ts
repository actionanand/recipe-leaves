import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authServ: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree | 
  Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return this.authServ.user.pipe(
      take(1),
      map(user =>{
        const isAuth = !!user;
        if(isAuth){
          return true;
        } else
        {
          return this.router.createUrlTree(['/auth']);
        }
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
    
  canDeactivate: ()=> Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
  canDeactivate(component: CanComponentDeactivate,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot,
      next?: RouterStateSnapshot): 
      Observable<boolean> | Promise<boolean> | boolean{

          return component.canDeactivate();
  }
}
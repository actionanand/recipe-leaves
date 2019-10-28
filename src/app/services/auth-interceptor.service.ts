import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authServ: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    
    return this.authServ.user.pipe(take(1), 
    exhaustMap(user =>{
      if(!user){
        return next.handle(req);
      }
      const modReq = req.clone({
        params: new HttpParams().set('auth', user.token)
      });
      return next.handle(modReq);
    })
    );
  }
}

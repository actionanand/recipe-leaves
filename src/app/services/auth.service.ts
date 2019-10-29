import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { timeout } from 'q';

export interface AuthRespData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user = new BehaviorSubject<User>(null);
  expirationTimer: any = null;

  constructor(private http: HttpClient, private router: Router) { }

  signUp(email: string, password: string){
    return this.http.post<AuthRespData>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCp6Fr94m_nait5fSG7Ky-QBC5XBjEuIxA',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
    )
    .pipe(catchError(this.handleError), tap(respData =>{
      this.handleAuthentication(respData.email, respData.localId, respData.idToken, +respData.expiresIn);
    })
    );
  }

  signIn(email: string, password: string){
    return this.http.post<AuthRespData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCp6Fr94m_nait5fSG7Ky-QBC5XBjEuIxA',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
    )
    .pipe(catchError(this.handleError), tap(respData =>{
      this.handleAuthentication(respData.email, respData.localId, respData.idToken, +respData.expiresIn);
    })
    );
  }

  logOut(){
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.expirationTimer){
      clearTimeout(this.expirationTimer);
    }
    this.expirationTimer=null;
  }

  autoLogOut(expirationDuration: number){
    this.expirationTimer = setTimeout(()=>{
      this.logOut();
    },expirationDuration);
  }

  autoLogIn(){
    const userData: 
      {email: string, id: string, _token: string, _tokenExpirationDate:string} 
      = JSON.parse(localStorage.getItem('userData'));

    if(!userData){
      return;
    }

    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if(loadedUser.token){
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogOut(expirationDuration);
    }
  
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number){

    const expirationDate = new Date(new Date().getTime() + +expiresIn*1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.autoLogOut(expiresIn*1000);
  }

  private handleError(errorResp: HttpErrorResponse){

    let errorMsg: string = 'A unkown error occurred!'

      if(!errorResp.error || !errorResp.error.error){
        return throwError(errorMsg);
      }
      switch(errorResp.error.error.message){
        case 'EMAIL_EXISTS':
          errorMsg = 'This email ID already exists!';
        break;
        case 'EMAIL_NOT_FOUND':
          errorMsg = 'This email does not exist!';
        break;
        case 'INVALID_PASSWORD':
          errorMsg = 'Please check your password';
        break;
      }
      return throwError(errorMsg);
  }

}

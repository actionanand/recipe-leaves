import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string){
    return this.http.post<AuthRespData>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCp6Fr94m_nait5fSG7Ky-QBC5XBjEuIxA',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
    )
    .pipe(catchError(this.handleError));
  }

  signIn(email: string, password: string){
    return this.http.post<AuthRespData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCp6Fr94m_nait5fSG7Ky-QBC5XBjEuIxA',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
    )
    .pipe(catchError(this.handleError));
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

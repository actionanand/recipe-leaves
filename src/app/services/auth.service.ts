import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthRespData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
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
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService, AuthRespData } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLogIn:boolean = true;
  showPass:boolean = false;
  error: string = null;
  isLoading: boolean = false;

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    
    if(!form.valid){
      return;
    }

    const email: string = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    let othObs: Observable<AuthRespData>;

    if(this.isLogIn){
      othObs = this.authServ.signIn(email, password);
    }  
    else
    {
      othObs = this.authServ.signUp(email, password);
    }
    
    othObs.subscribe(responseData =>{
            console.log(responseData);
            this.isLoading = false;
            this.router.navigate(['/recipes']);
          },
          errorMsg =>{
            console.log(errorMsg);
            this.error = errorMsg;
            this.isLoading = false;
          });

          form.reset();
          this.showPass = false;
          this.isLogIn = true;
      }

}

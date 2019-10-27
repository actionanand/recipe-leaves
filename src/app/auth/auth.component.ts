import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';

import { AuthService } from '../services/auth.service';

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

  constructor(private authServ: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    
    if(!form.valid){
      return;
    }

    const email: string = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    if(this.isLogIn){
      this.isLoading = false;
    }  
    else
    {
      this.authServ.signUp(email, password).subscribe(responseData =>{
        console.log(responseData);
        this.isLoading = false;
      },
      errorMsg =>{
        console.log(errorMsg);
        this.error = errorMsg;
        this.isLoading = false;
      });
    }

    // this.isLoading = false;
    form.reset();
    this.showPass = false;
    this.isLogIn = true;
  }

}

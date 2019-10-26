import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLogIn:boolean = true;
  showPass:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    form.reset();
    this.showPass = false;
    this.isLogIn = true;
  }

}

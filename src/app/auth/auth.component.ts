import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AuthService, AuthRespData } from '../services/auth.service';
import { AlertBoxComponent } from '../dynamic-comp/alert-box/alert-box.component';
import { PlaceHolderDirective } from '../directives/place-holder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  isLogIn:boolean = true;
  showPass:boolean = false;
  error: string = null;
  isLoading: boolean = false;
  @ViewChild(PlaceHolderDirective, {static: false}) alertHost: PlaceHolderDirective;
  private closeSubs: Subscription;

  constructor(private authServ: AuthService, private router: Router, private compFactResolver: ComponentFactoryResolver) { }

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
            this.dynamicShowError(errorMsg);
            this.isLoading = false;
          });

          form.reset();
          this.showPass = false;
          this.isLogIn = true;
      }

      private dynamicShowError(message: string){
        const alertCompFact = this.compFactResolver.resolveComponentFactory(AlertBoxComponent);
        const hostViewContainer = this.alertHost.viewContRef;
        hostViewContainer.clear();
        const dynamicCompRef = hostViewContainer.createComponent(alertCompFact);
        dynamicCompRef.instance.message = this.error;

        this.closeSubs = dynamicCompRef.instance.close.subscribe(()=>{
          this.closeSubs.unsubscribe();
          hostViewContainer.clear();
        });
      }

    ngOnDestroy(){
      if(this.closeSubs){

        this.closeSubs.unsubscribe();
      }
    }

}

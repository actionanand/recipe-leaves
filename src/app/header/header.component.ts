import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  appTitle = 'Recipe Leaves';
  isAuthenticated: boolean = false;
  private userSub: Subscription;
  name: string = 'hi guest'

  constructor(private dataStorageServ: DataStorageService, private authServ: AuthService) { }

  ngOnInit() {
    this.userSub = this.authServ.user.subscribe(user =>{
      this.isAuthenticated = !!user;
      if(!!user){
        this.name = user.email.split('@')[0];
      }
    });
  }

  onSaveData(){
    this.dataStorageServ.storeRecipe();
  }

  onFetchData(){
    this.dataStorageServ.fetchRecipe().subscribe();
  }

  onLogOut(){
    this.authServ.logOut();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}

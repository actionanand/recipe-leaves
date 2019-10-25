import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appTitle = 'Recipe Leaves';
  constructor(private dataStorageServ: DataStorageService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageServ.storeRecipe();
  }

  onFetchData(){
    this.dataStorageServ.fetchRecipe();
  }

}

import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('tomatto',3)
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Coffee', 'Morning strong coffee. It tastes good', 
    'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg'),
    new Recipe('Burger', 'it is a cheesey chicken burger, it is very crisp and it is very cheap', 
    'https://cdn.pixabay.com/photo/2015/07/01/07/06/burger-827309_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

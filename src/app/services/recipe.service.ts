import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Coffee', 'Morning strong coffee. It tastes good', 
    'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg'),
    new Recipe('Burger', 'it is a cheesey chicken burger, it is very crisp and it is very cheap', 
    'https://cdn.pixabay.com/photo/2015/07/01/07/06/burger-827309_960_720.jpg')
  ];

  getRecipe(){
    return this.recipes.slice();
  }

  constructor() { }
}

import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
  new Recipe('Big Fat Burger',
    'What else you need to say?',
    'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ]),
    new Recipe('Filter Coffe',
    'Morning strong coffee. It tastes good',
    'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg',
    [
      new Ingredient('Coffe bean', 7),
      new Ingredient('Milk', 1)
    ]),
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ])
  ];

  constructor(private slServ: ShoppingListService){}

  getRecipe(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slServ.addIngredients(ingredients);
  }
}

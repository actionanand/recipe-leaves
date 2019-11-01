import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  loadedRecp = new Subject<Recipe>();

  // private recipes: Recipe[] = [
  // new Recipe('Big Fat Burger',
  //   'What else you need to say?',
  //   'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //   [
  //     new Ingredient('Buns', 2),
  //     new Ingredient('Meat', 1)
  //   ]),
  //   new Recipe('Filter Coffe',
  //   'Morning strong coffee. Wah.. What a taste?',
  //   'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg',
  //   [
  //     new Ingredient('Coffe bean', 7),
  //     new Ingredient('Milk', 1)
  //   ]),
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20)
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private slServ: ShoppingListService){}

  setRecipe(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slServ.addIngredients(ingredients);
  }

  addRecipe(newRecp: Recipe){
    this.recipes.push(newRecp);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecp: Recipe){
    this.recipes[index] = newRecp;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  isRecipeExist(index: number){
    this.loadedRecp.next(this.getRecipe(index));
  }
}

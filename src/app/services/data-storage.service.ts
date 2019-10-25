import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private recipeServ: RecipeService, private http: HttpClient) { }

  storeRecipe(){
    const recipes = this.recipeServ.getRecipes();
    this.http.put('https://recipe-leaves.firebaseio.com/recipes.json', recipes)
    .subscribe(response =>{
      console.log(response);
    });
  }

  fetchRecipe(){
    this.http.get<Recipe[]>('https://recipe-leaves.firebaseio.com/recipes.json')
    .subscribe(recipes =>{
      this.recipeServ.setRecipe(recipes);
    })
  }
}

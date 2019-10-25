import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

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
    return this.http.get<Recipe[]>('https://recipe-leaves.firebaseio.com/recipes.json')
    .pipe(
      map(recipes =>{
        return recipes.map(recipe => {
          return{
            ...recipe , ingredients: recipe.ingredients? recipe.ingredients : []
          };
        });
      }),
      tap(recipes =>{
        this.recipeServ.setRecipe(recipes);
      })
    );
  }
}

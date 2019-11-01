import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private recipeServ: RecipeService, private http: HttpClient, private authServ: AuthService, private router: Router) { }

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

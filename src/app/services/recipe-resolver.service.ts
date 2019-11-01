import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Recipe } from '../models/recipe.model';
import { DataStorageService } from './data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageServ: DataStorageService, private recipeServ: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const recipes = this.recipeServ.getRecipes();
    // let id: number = +route.paramMap.get('id');

    if(recipes.length == 0){
      return this.dataStorageServ.fetchRecipe();
    } else
    {
      return recipes;
    }
  }
}

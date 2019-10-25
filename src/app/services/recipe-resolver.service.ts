import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Recipe } from '../models/recipe.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageServ: DataStorageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.dataStorageServ.fetchRecipe();
  }
}

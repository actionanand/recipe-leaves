import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  recipeSub: Subscription;

  constructor(private recipeServ: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeServ.getRecipes();
     this.recipeSub = this.recipeServ.recipeChanged.subscribe((newRecipe: Recipe[])=>{
       this.recipes = newRecipe;
     });
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.recipeSub.unsubscribe();
  }

}

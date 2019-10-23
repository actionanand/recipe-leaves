import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeServ: RecipeService) { }

  ngOnInit() {
  }

  // onAddToShoppingList() {
  //   this.recipeServ.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

}

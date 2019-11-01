import { Component, OnInit } from '@angular/core';

import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeServ: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        if(!!this.recipeServ.getRecipe(this.id)){
          
          this.recipe = this.recipeServ.getRecipe(this.id);
        }
        else
        {
          this.router.navigate(['/page-not-found']);
        }
      }
    );
  }

  onAddingToShopping() {
    this.recipeServ.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){
    if(confirm('Sure to delete this recipe?')){
      this.recipeServ.deleteRecipe(this.id);
      this.router.navigate(['..'], {relativeTo: this.route});
    }    
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { RecipeListComponent } from 'src/app/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from 'src/app/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from 'src/app/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartPageComponent } from 'src/app/recipes/recipe-start-page/recipe-start-page.component';
import { RecipeNewEditPageComponent } from 'src/app/recipes/recipe-new-edit-page/recipe-new-edit-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutesModule } from './recipes-routes.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartPageComponent,
    RecipeNewEditPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutesModule
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartPageComponent,
    RecipeNewEditPageComponent
  ]
})
export class RecipesModule { }

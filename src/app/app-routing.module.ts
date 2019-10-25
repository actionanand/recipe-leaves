import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartPageComponent } from './recipes/recipe-start-page/recipe-start-page.component';
import { RecipeNewEditPageComponent } from './recipes/recipe-new-edit-page/recipe-new-edit-page.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeResolverService } from './services/recipe-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartPageComponent},
    {path: 'new', component: RecipeNewEditPageComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
    {path: ':id/edit', component: RecipeNewEditPageComponent, resolve: [RecipeResolverService]}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

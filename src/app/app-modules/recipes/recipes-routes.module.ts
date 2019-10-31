import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { RecipeStartPageComponent } from 'src/app/recipes/recipe-start-page/recipe-start-page.component';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate-guard.guard';
import { RecipeNewEditPageComponent } from 'src/app/recipes/recipe-new-edit-page/recipe-new-edit-page.component';
import { RecipeDetailComponent } from 'src/app/recipes/recipe-detail/recipe-detail.component';
import { RecipeResolverService } from 'src/app/services/recipe-resolver.service';

const routes: Routes = [
  {path: 'recipes', canActivate: [AuthGuard], component: RecipesComponent, children: [
    {path: '', component: RecipeStartPageComponent},
    {path: 'new',canDeactivate: [CanDeactivateGuard], component: RecipeNewEditPageComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
    {path: ':id/edit',canDeactivate: [CanDeactivateGuard], component: RecipeNewEditPageComponent, resolve: [RecipeResolverService]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutesModule { }

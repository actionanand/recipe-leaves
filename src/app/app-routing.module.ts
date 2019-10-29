import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartPageComponent } from './recipes/recipe-start-page/recipe-start-page.component';
import { RecipeNewEditPageComponent } from './recipes/recipe-new-edit-page/recipe-new-edit-page.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeResolverService } from './services/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.guard';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', canActivate: [AuthGuard], component: RecipesComponent, children: [
    {path: '', component: RecipeStartPageComponent},
    {path: 'new',canDeactivate: [CanDeactivateGuard], component: RecipeNewEditPageComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
    {path: ':id/edit',canDeactivate: [CanDeactivateGuard], component: RecipeNewEditPageComponent, resolve: [RecipeResolverService]}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

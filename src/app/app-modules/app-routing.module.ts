import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthComponent } from '../auth/auth.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'shopping-list', loadChildren: './shopping.module#ShoppingModule'},
  {path: 'recipes', loadChildren: ()=> import('./recipes/recipes.module').then(m=> m.RecipesModule)},
  {path: 'auth', component: AuthComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

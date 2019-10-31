import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { AuthComponent } from '../auth/auth.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RecipesRoutesModule } from './recipes/recipes-routes.module';


const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RecipesRoutesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

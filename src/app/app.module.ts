import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { RecipeStartPageComponent } from './recipes/recipe-start-page/recipe-start-page.component';
import { RecipeNewEditPageComponent } from './recipes/recipe-new-edit-page/recipe-new-edit-page.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChargingComponent } from './loading-spinner/charging/charging.component';
import { FacebookComponent } from './loading-spinner/facebook/facebook.component';
import { LoadingComponent } from './loading-spinner/loading/loading.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AlertBoxComponent } from './dynamic-comp/alert-box/alert-box.component';
import { PlaceHolderDirective } from './directives/place-holder.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartPageComponent,
    RecipeNewEditPageComponent,
    AuthComponent,
    FooterComponent,
    PageNotFoundComponent,
    ChargingComponent,
    FacebookComponent,
    LoadingComponent,
    AlertBoxComponent,
    PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
  }
],
  bootstrap: [AppComponent],
  entryComponents: [AlertBoxComponent]
})
export class AppModule { }

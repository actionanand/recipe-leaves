import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { CommonFeatureModule } from './app-modules/common-feature.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { shoppingListReducer } from './store/shoppin-list/shopping-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer}),
    AppRoutingModule,
    CommonFeatureModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
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
    DropdownDirective,
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

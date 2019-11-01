import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from '../loading-spinner/loading/loading.component';
import { AlertBoxComponent } from '../dynamic-comp/alert-box/alert-box.component';
import { PlaceHolderDirective } from '../directives/place-holder.directive';

@NgModule({
  declarations: [
    LoadingComponent,
    AlertBoxComponent,
    PlaceHolderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    LoadingComponent,
    AlertBoxComponent,
    PlaceHolderDirective
  ],
  entryComponents: [AlertBoxComponent]
})
export class CommonFeatureModule { }

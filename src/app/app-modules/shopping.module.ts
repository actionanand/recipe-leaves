import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';
import { CommonFeatureModule } from './common-feature.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: ShoppingListComponent}
    ]),
    FormsModule,
    CommonFeatureModule
  ],
  exports: [
    ShoppingListComponent,
    ShoppingEditComponent,
    RouterModule
  ]
})
export class ShoppingModule { }

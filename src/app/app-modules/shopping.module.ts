import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'shopping-list', component: ShoppingListComponent}
    ]),
    CommonModule,
    FormsModule
  ],
  exports: [
    ShoppingListComponent,
    ShoppingEditComponent,
    RouterModule
  ]
})
export class ShoppingModule { }

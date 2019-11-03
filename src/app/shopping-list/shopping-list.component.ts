import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import * as fromShoppingList from 'src/app/store/shoppin-list/shopping-list.reducer';
import * as ShoppingListAction from 'src/app/store/shoppin-list/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  incredientSubs: Subscription;

  // ingredients: Ingredient[];
  ingredients: Observable<{ ingredients: Ingredient[]}>;

  constructor(private slServ: ShoppingListService,
    private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.slServ.getIngredients();
    // this.incredientSubs=this.slServ.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }

  onEditIngredients(index: number){
    // this.slServ.selectedIngIndex.next(index);
    this.store.dispatch(new ShoppingListAction.StartEdit(index));
  }

  ngOnDestroy(){
    // this.incredientSubs.unsubscribe();
  }

}

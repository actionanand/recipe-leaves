import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

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
    private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

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
    this.slServ.selectedIngIndex.next(index);
  }

  ngOnDestroy(){
    this.incredientSubs.unsubscribe();
  }

}

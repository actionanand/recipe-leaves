import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  incredientSubs: Subscription;

  ingredients: Ingredient[];

  constructor(private slServ: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slServ.getIngredients();
    this.incredientSubs=this.slServ.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onEditIngredients(index: number){
    this.slServ.selectedIngIndex.next(index);
  }

  ngOnDestroy(){
    this.incredientSubs.unsubscribe();
  }

}

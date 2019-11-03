import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/models/ingredient.model';
import * as ShoppingListAction from 'src/app/store/shoppin-list/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  ingSubscription: Subscription;

  @ViewChild('f', {static: false}) slForm: NgForm;
  editMode: boolean = false;
  ingredientID: number;
  selectedIngr: Ingredient;

  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private slServ: ShoppingListService,
    private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.ingSubscription = this.slServ.selectedIngIndex.subscribe(
      (index: number)=>{
        this.editMode = true;
        this.ingredientID = index;
        this.selectedIngr = this.slServ.getIngredient(this.ingredientID);
        this.slForm.setValue({
          name: this.selectedIngr.name,
          amount: this.selectedIngr.amount
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const values = form.value;
    const newIngredient = new Ingredient(values.name, values.amount);
    if(this.editMode){
      //this.slServ.updateIngredient(this.ingredientID,newIngredient);
      this.store.dispatch(new ShoppingListAction.UpdateIngredients({index: this.ingredientID, ingredient: newIngredient}));
    }else
    {
      // this.slServ.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListAction.AddIngredient(newIngredient));
    }
    form.reset();
    this.editMode=false;
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    if(confirm('Sure to delete this?')){
      //this.slServ.deleteIngredient(this.ingredientID);
      this.store.dispatch(new ShoppingListAction.DeleteIngredient(this.ingredientID));
      this.onClear();
    }
  }

  ngOnDestroy(){
    this.ingSubscription.unsubscribe();
  }
}

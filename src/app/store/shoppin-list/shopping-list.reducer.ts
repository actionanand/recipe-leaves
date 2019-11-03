
import { Ingredient } from 'src/app/models/ingredient.model';
import * as ShoppingListAction from './shopping-list.actions';

const initialState = {
    ingredients:[
        new Ingredient('Onions', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('meat',1)
      ]
};

export function shoppingListReducer(state = initialState, 
    action: ShoppingListAction.ShoppingListType){

    switch(action.type){
        case ShoppingListAction.ADD_INGREDIENT:
            return{
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListAction.ADD_INGREDIENTS:
            return{
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        default:
            return state;

    }
}
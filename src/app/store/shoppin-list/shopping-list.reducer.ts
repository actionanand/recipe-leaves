
import { Ingredient } from 'src/app/models/ingredient.model';
import * as ShoppingListAction from './shopping-list.actions';

export interface State{
    ingredients: Ingredient[];
    editedIg: Ingredient; //ig means ingredient
    editedIgIndex: number; 
}

export interface AppState{
    shoppingList: State;
}

const initialState: State = {
    ingredients:[
        new Ingredient('Onions', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('meat',1)
      ],

      editedIg: null,
      editedIgIndex: -1
};

export function shoppingListReducer(state:State = initialState, 
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

        case ShoppingListAction.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index]; //get the selected ig
            const updatedIg = {
                ...ingredient, //getting name & amount of old(selected) IG
                ...action.payload.ingredient //copying the updated IG ; getting amount & name
            };
            const updatedIngredients = [...state.ingredients]; //getting all old IGs (copying)
            updatedIngredients[action.payload.index] = updatedIg; //updating the copy of old IGs

            return{
                ...state,
                ingredients: updatedIngredients
            };

        case ShoppingListAction.DELETE_INGREDIENT:
            return{
                ...state,
                ingredients: state.ingredients.filter((ig, igIndex)=>{
                    return igIndex != action.payload; //allowing all values that doesnt match the index
                })
            };

        case ShoppingListAction.START_EDIT:
            return{
                ...state,
                editedIg: {...state.ingredients[action.payload]},
                editedIgIndex: action.payload
            };

        case ShoppingListAction.STOP_EDIT:
            return{
                ...state,
                editedIg: null,
                editedIgIndex: -1
            };

        default:
            return state;

    }
}
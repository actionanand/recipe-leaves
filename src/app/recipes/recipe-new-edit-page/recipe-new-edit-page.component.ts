import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-new-edit-page',
  templateUrl: './recipe-new-edit-page.component.html',
  styleUrls: ['./recipe-new-edit-page.component.css']
})
export class RecipeNewEditPageComponent implements OnInit {

  id:number;
  editMode:boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeServ: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit(){
    if(this.editMode){
      this.recipeServ.updateRecipe(this.id, this.recipeForm.value);
    } else

    {
      this.recipeServ.addRecipe(this.recipeForm.value);
    }
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private initForm(){
    let recipeName = '';
    let recipeDescription = '';
    let recipeImgPath = '';
    let recipeIngr = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeServ.getRecipe(this.id);
      recipeName=recipe.name;
      recipeDescription=recipe.description;
      recipeImgPath=recipe.imagePath;

      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngr.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImgPath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngr
    });
  }

  onAddIngr(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

}

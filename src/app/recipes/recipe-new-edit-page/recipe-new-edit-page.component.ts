import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

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
    console.log(this.recipeForm);
  }

  private initForm(){
    let recipeName = '';
    let recipeDescription = '';
    let recipeImgPath = '';

    if(this.editMode){
      const recipe = this.recipeServ.getRecipe(this.id);
      recipeName=recipe.name;
      recipeDescription=recipe.description;
      recipeImgPath=recipe.imagePath;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImgPath),
      'description': new FormControl(recipeDescription)
    });
  }

}

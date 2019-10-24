import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-new-edit-page',
  templateUrl: './recipe-new-edit-page.component.html',
  styleUrls: ['./recipe-new-edit-page.component.css']
})
export class RecipeNewEditPageComponent implements OnInit {

  id:number;
  editMode:boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
      }
    );

  }


}

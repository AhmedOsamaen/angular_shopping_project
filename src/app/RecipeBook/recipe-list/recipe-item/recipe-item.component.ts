import { RecipeService } from './../../../services/recipe.service';
import { Recipe } from './../../../Models/RecipeModel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()recipe:Recipe;
  @Input()id:number;
  // @Output() eve=new EventEmitter<Recipe>();
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  // getDetails(data:Recipe){
  //    this.recipeService.recipeSelected.emit(data);
  //   // console.log(rec);
  //   // this.eve.emit(data);

  // }

}

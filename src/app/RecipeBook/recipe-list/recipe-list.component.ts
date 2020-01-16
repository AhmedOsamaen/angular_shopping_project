import { Subscription } from 'rxjs';
import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../../Models/RecipeModel';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  // @Output()recipeee=new EventEmitter<Recipe>();
  recipes:Recipe[];
  subs:Subscription;
  constructor(private recipeService:RecipeService) {

   }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
   this.subs = this.recipeService.recipeChanged.subscribe(data=>{
      this.recipes=data;
    })
  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }
  // getItem(data:Recipe){
  //   this.recipeee.emit(data);
  // }
}

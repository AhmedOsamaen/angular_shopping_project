import { Recipe } from './../Models/RecipeModel';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../Models/IngredientsModel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged=new Subject<Recipe[]>();
 private recipes:Recipe[]=[
    new Recipe("rec1","test","https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg",[new Ingredient('tatos',1),new Ingredient('meat',2)])
,    new Recipe("Batates","sanyet batates","https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg",[new Ingredient('tatos',1),new Ingredient('meat',2)])

  ];

  // recipeSelected=new EventEmitter<Recipe>();
  // recipeSelected= new Subject<Recipe>();

  constructor() { }

  getRecipes(){
    return this.recipes.slice();

  }

  getSelectedRecipe(recipeIndex){
    return this.recipes[recipeIndex];
  }
  getRecipe(index){
    return this.recipes[index];
  }
  addRecipe(recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index:number,recipe:Recipe){
    this.recipes[index]=recipe;
    this.recipeChanged.next(this.recipes.slice());

  }
  deleteRecipe(index){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}

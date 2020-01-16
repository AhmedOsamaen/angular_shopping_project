import { Ingredient } from './../Models/IngredientsModel';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients :Ingredient[]=[
    new Ingredient("Salad",1)
,   new Ingredient("Apples",12)
];
  // ingredientAdded= new EventEmitter<Ingredient>();
  ingredientAdded= new Subject<Ingredient>();
  ingredientSelected=new Subject<Ingredient>();
  ingredientSelectedIndex=new Subject<number>();

  constructor() { }

  getIngredients(){
    return this.ingredients;
  }
  getIngredient(index){
    return this.ingredients[index];
  }
  addIngredients(ings:Ingredient[]){
    // for(let i of ings){
    //   this.ingredients.push(i);
    // }
    this.ingredients.push(...ings);
  }
  updateIngredient(ing:Ingredient,index){
    this.ingredients[index]=ing;
  }

  deleteIngredient(index){
    this.ingredients.splice(index,1);
  }
}

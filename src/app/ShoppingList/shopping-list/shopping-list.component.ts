import { Subscription } from 'rxjs';
import { ShoppingService } from './../../services/shopping.service';
import { Ingredient } from './../../Models/IngredientsModel';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  private ingredientUnsub:Subscription;
  ingredients:Ingredient[];
//   ingredients :Ingredient[]=[
//     new Ingredient("Salad",1)
// ,   new Ingredient("Apples",12)
// ];
  constructor(private shoppingService:ShoppingService) { }
  
  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
   this.ingredientUnsub = this.shoppingService.ingredientAdded.subscribe(ingredient=>{
      this.ingredients.push(ingredient);
    })
  }
  ngOnDestroy(){
    this.ingredientUnsub.unsubscribe();
  }

  selectItem(item){
    this.shoppingService.ingredientSelected.next(this.shoppingService.getIngredient(item));
    this.shoppingService.ingredientSelectedIndex.next(item);
    // this.shoppingService.ingredientSelected.subscribe(data=>console.log(data));
  }

  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}

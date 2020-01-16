import { RecipeService } from './../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from './../../Models/IngredientsModel';
import { ShoppingService } from './../../services/shopping.service';
import { Recipe } from './../../Models/RecipeModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //  @Input() recipe:Recipe;
   recipe:Recipe;
    public recipeId;
  constructor(private shoppingService:ShoppingService,private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.recipeId= params.get('id');
      // console.log(this.recipeId);
      this.recipe=this.recipeService.getSelectedRecipe(this.recipeId);
      // console.log(this.recipe.description);
     })     
  }

  addToShoppingList(data:Recipe){
    console.log(data);
    this.shoppingService.addIngredients(data.ingredients);
  }
  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }
}

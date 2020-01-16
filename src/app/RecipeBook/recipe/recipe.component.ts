import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../../Models/RecipeModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedR:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(data=>this.selectedR=data);
  }


}

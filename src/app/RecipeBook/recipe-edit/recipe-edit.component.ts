import { Recipe } from './../../Models/RecipeModel';
import { Validator, Validators } from '@angular/forms';
import { RecipeService } from './../../services/recipe.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id:number;
    editable:boolean=false;
    recipeForm:FormGroup;
    
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=> 
      {
        this.id=+params.get('id');
        this.editable=params.get('id')!=null;
        console.log(this.editable);
        this.initForm()
    })
  }

  private initForm(){
    let rename='';
    let imgUrl='';
    let desc='';
    let ingredients=new FormArray([]);
    if(this.editable){
      const recipe=this.recipeService.getRecipe(this.id);
      rename=recipe.name;
      imgUrl=recipe.imgUrl;
      desc=recipe.description;
      if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          ingredients.push(
            new FormGroup({
              'name':new FormControl(ing.name,Validators.required),
              'amount':new FormControl(ing.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }
    this.recipeForm=new FormGroup({
      'name':new FormControl(rename,Validators.required),
      'imgUrl':new FormControl(imgUrl,Validators.required),
      'description':new FormControl(desc,Validators.required),
      'ingredients':ingredients
    });
  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  onSubmit(){
    // const newRecipe=new Recipe(this.recipeForm.value['name'],
    // this.recipeForm.value['description'],
    // this.recipeForm.value['imgUrl'],this.recipeForm.value['ingredients']);
    if(this.editable){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.cancel();
    console.log(this.recipeForm);
}
cancel(){
this.router.navigate(['../'],{relativeTo:this.route})
}

onDeleteIngredient(i){
  (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
}


}

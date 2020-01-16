import { RecipeEditComponent } from './RecipeBook/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './RecipeBook/recipe-detail/recipe-detail.component';
import { HomeComponent } from './../../../dream-project/src/app/home/home.component';
import { RecipeComponent } from './RecipeBook/recipe/recipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './ShoppingList/shopping-list/shopping-list.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'recipe',component:RecipeComponent,children:
  [   {path:'new',component:RecipeEditComponent},
    {path:':id',component:RecipeDetailComponent},
   {path:':id/edit',component:RecipeEditComponent}

  ]},

  {path:'shopping',component:ShoppingListComponent},
  {path:'**',redirectTo:'/recipe'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

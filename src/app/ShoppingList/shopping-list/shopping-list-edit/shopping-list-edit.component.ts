import { ShoppingService } from './../../../services/shopping.service';
import { Ingredient } from './../../../Models/IngredientsModel';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  //  @ViewChild('nameInput',{static:false})nameInputRef:ElementRef;
  //  @ViewChild('amount',{static:false})amountInputRef:ElementRef;
  //  @Output() ingredientAdded=new EventEmitter<Ingredient>();
  @ViewChild('userForm', { static: false }) userForm: NgForm;
  editMode=false;
  subscriptionIng: Subscription;
  subscriptionIndex: Subscription;

  ingredientAdded: Ingredient;
  editableIngredient = new Ingredient('', 0);
  editableIngredientIndex;
  constructor(private shoppingService: ShoppingService) { }
  ngOnInit() {
    this.subscriptionIng = this.shoppingService.ingredientSelected
      .subscribe(data => {
        this.userForm.setValue({
          name: data.name,
          amount: data.amount
        });
      this.editMode=true;
    });

    this.subscriptionIndex=  this.shoppingService.ingredientSelectedIndex.subscribe(data=>this.editableIngredientIndex=data);


  }

  ngOnDestroy() {
    this.subscriptionIng.unsubscribe();
    this.subscriptionIndex.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const formValue = form.value;
    const ing = new Ingredient(formValue.name, formValue.amount);
    
    if(this.editMode){
      this.shoppingService.updateIngredient(ing,this.editableIngredientIndex);
    }
    else{
      this.shoppingService.ingredientAdded.next(ing);
    }
    this.userForm.reset();
    this.editMode=false;
    // this.ingredientAdded.emit(ing);

  }

  clear(){
    this.userForm.reset();
    this.editMode=false;
  }

  delete(){
    this.shoppingService.deleteIngredient(this.editableIngredientIndex);
    this.clear()
  }
  // onAdd(){
  //   const ingName=this.nameInputRef.nativeElement.value;
  //   const ingamount=this.amountInputRef.nativeElement.value;
  //   const ing=new Ingredient(ingName,ingamount);
  //   this.shoppingService.ingredientAdded.next(ing);
  //   // this.ingredientAdded.emit(ing);

  // }
}

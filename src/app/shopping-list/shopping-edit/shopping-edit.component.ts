import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editIndex: number;
  subscription: Subscription;
  ingredientForm: FormGroup;
  allowedIngredients: string[];
  editMode: boolean;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editMode = false;
    this.allowedIngredients = this.shoppingListService.getAllowedIngredients();
    this.ingredientForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.validateIngredientName.bind(this)]),
      'amount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
    });
    this.subscription = this.shoppingListService.editingStarted.subscribe(
      (index: number) => {
        this.editIndex = index;
        this.editMode = true;
        const editedItem = this.shoppingListService.getIngredient(index);
        this.ingredientForm.setValue({
          name: editedItem.name, amount: editedItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  validateIngredientName(control: FormControl): {[key: string]: boolean} {
    let ingredName: string;
    if (control.value) {
      ingredName = control.value.toLowerCase();
    } else {
      ingredName = '';
    }
    if (this.allowedIngredients.indexOf(ingredName) === -1 && ingredName !== '') {
      return {'ingredientNotAllowed': true};
    } else {
      return null;
    }
  }

  onSubmit() {
    const newIngredient = new Ingredient(this.ingredientForm.value.name, this.ingredientForm.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.onClear();
  }

  onClear() {
    this.ingredientForm.reset();
    // console.log(this.ingredientForm);
  }
  onClearName() {
    this.ingredientForm.get('name').reset();
  }

  onClearAmount() {
    this.ingredientForm.get('amount').reset();
  }
}

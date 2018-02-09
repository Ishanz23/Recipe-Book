import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string;
  ingredientAmount: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    (this.ingredientName === undefined || this.ingredientAmount === undefined) ?
      console.log('Ingredient Name/amount missing!') :
      this.shoppingListService.addIngredient(new Ingredient( this.ingredientName, this.ingredientAmount));
  }

  onDeleteIngredient() {
    (this.ingredientName === undefined || this.ingredientAmount === undefined) ?
      console.log('Ingredient Name/amount missing!') :
      this.shoppingListService.deleteIngredient(new Ingredient( this.ingredientName, this.ingredientAmount));
  }

  onClearName() {
    this.ingredientName = undefined;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string;
  ingredientAmount: number;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    (this.ingredientName === undefined || this.ingredientAmount === undefined) ?
      console.log('Ingredient Name/amount missing!') :
      this.ingredientAdded.emit(new Ingredient( this.ingredientName, this.ingredientAmount));
  }

  onDeleteIngredient() {
    (this.ingredientName === undefined || this.ingredientAmount === undefined) ?
      console.log('Ingredient Name/amount missing!') :
      this.ingredientDeleted.emit(new Ingredient( this.ingredientName, this.ingredientAmount));
  }

  onClearName() {
    this.ingredientName = undefined;
  }
}

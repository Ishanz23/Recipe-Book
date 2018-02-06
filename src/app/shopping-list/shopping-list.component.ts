import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }

  onIngredientDeleted(ingredient: Ingredient) {
    for (const i in this.ingredients) {
      if (this.ingredients[i].name === ingredient.name && this.ingredients[i].amount >= ingredient.amount) {
        this.ingredients[i].amount = this.ingredients[i].amount - ingredient.amount;
        if (this.ingredients[i].amount === 0) {
          this.ingredients.splice(+i);
        }
      }
    }
    console.log(this.ingredients);
  }
}

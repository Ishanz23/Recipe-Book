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
    let ingredientAdded: boolean;
    for (const i in this.ingredients) {
      if (ingredient.name === this.ingredients[i].name) {
        this.ingredients[i].amount += ingredient.amount;
        ingredientAdded = true;
        break;
      } else {
        ingredientAdded = false;
      }
    }
    if (!ingredientAdded) {
      this.ingredients.push(ingredient);
    }
    console.log(this.ingredients);
  }

  onIngredientDeleted(ingredient: Ingredient) {
    for (const i in this.ingredients) {
      if (this.ingredients[i].name === ingredient.name && this.ingredients[i].amount >= ingredient.amount) {
        this.ingredients[i].amount = this.ingredients[i].amount - ingredient.amount;
        if (this.ingredients[i].amount === 0) {
          this.ingredients.splice( +i, 1);
        }
      }
    }
    console.log(this.ingredients);
  }
}

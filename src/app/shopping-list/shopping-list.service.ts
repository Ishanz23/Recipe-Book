import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        let ingredientAdded: boolean;
        for (const i in this.ingredients) {
            if (ingredient.name === this.ingredients[i].name) {
            this.ingredients[i].amount += ingredient.amount;
            this.ingredientsChanged.emit(this.ingredients.slice());
            ingredientAdded = true;
            break;
            } else {
            ingredientAdded = false;
            }
        }
        if (!ingredientAdded) {
            this.ingredients.push(ingredient);
            this.ingredientsChanged.emit(this.ingredients.slice());
        }
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    deleteIngredient(ingredient: Ingredient) {
        for (const i in this.ingredients) {
            if (this.ingredients[i].name === ingredient.name && this.ingredients[i].amount >= ingredient.amount) {
                this.ingredients[i].amount = this.ingredients[i].amount - ingredient.amount;
                if (this.ingredients[i].amount === 0) {
                this.ingredients.splice( +i, 1);
                }
                this.ingredientsChanged.emit(this.ingredients.slice());
            }
        }
        console.log(this.ingredients);
    }

}

import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            'Dal Fry',
            'The tasty companion for your Chapatis!',
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Daal_after_Tadka_Pulse_Soup_India.jpg',
            [new Ingredient('Moong Daal', 2), new Ingredient('Onion', 2), new Ingredient('Chili', 1)]
        ),
        new Recipe(
            'Palak Paneer',
            'The Magic of spinach with Paneer!',
            'https://upload.wikimedia.org/wikipedia/commons/d/da/Yummy_Palak_Paneer.jpg',
            [new Ingredient('Paneer', 30), new Ingredient('Spinach', 5), new Ingredient('Onion', 2)]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToCart(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}

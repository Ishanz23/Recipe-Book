import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
    private recipeCollection: AngularFirestoreCollection<Recipe>;
    private recipeDoc: AngularFirestoreDocument<Recipe>;
    private recipes: Observable<Recipe[]>;

    constructor(private afs: AngularFirestore, private shoppingListService: ShoppingListService) {
        this.recipeCollection = this.afs.collection('recipes');
        this.recipes = this.recipeCollection.snapshotChanges().map(
            actions => {
                return actions.map(
                    a => {
                        const data = a.payload.doc.data() as Recipe;
                        data.id = a.payload.doc.id;
                        return data;
                    }
                );
            }
        );
    }

    getRecipe(id: string) {
        return this.afs.doc(`recipes/${id}`).valueChanges();
    }

    getRecipes() {
        return this.recipes;
    }

    addIngredientsToCart(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipeCollection.add(recipe);
    }

    updateRecipe(recipe: Recipe) {
        this.recipeDoc = this.afs.doc(`recipes/${recipe.id}`);
        this.recipeDoc.update(recipe);
    }

    deleteRecipe(id: string) {
        this.recipeDoc = this.afs.doc(`recipes/${id}`);
        this.recipeDoc.delete();
    }
}

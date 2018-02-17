import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ValidIngredient } from '../shared/validIngredient.model';

@Injectable()
export class ShoppingListService {
    ingredientsCollection: AngularFirestoreCollection<ValidIngredient>;
    ingredientsChanged = new Subject<Ingredient[]>();
    editingStarted = new Subject<number>();
    private ingredients: Ingredient[] = [];
    private validIngredients: Observable<ValidIngredient[]>;

    constructor(private afs: AngularFirestore) {
        this.validIngredients = this.afs.collection('validIngredients').valueChanges();
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    getValidIngredients() {
        return this.validIngredients;
    }

    addIngredient(ingredient: Ingredient) {
        let ingredientAdded: boolean;
        for (const i in this.ingredients) {
            if (ingredient.name === this.ingredients[i].name) {
            this.ingredients[i].amount += ingredient.amount;
            this.ingredientsChanged.next(this.ingredients.slice());
            ingredientAdded = true;
            break;
            } else {
            ingredientAdded = false;
            }
        }
        if (!ingredientAdded) {
            this.ingredients.push(ingredient);
            this.ingredientsChanged.next(this.ingredients.slice());
        }
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(ingredient: Ingredient) {
        for (const i in this.ingredients) {
            if (this.ingredients[i].name === ingredient.name && this.ingredients[i].amount >= ingredient.amount) {
                this.ingredients[i].amount = this.ingredients[i].amount - ingredient.amount;
                if (this.ingredients[i].amount === 0) {
                this.ingredients.splice( +i, 1);
                }
                this.ingredientsChanged.next(this.ingredients.slice());
            }
        }
        console.log(this.ingredients);
    }

}

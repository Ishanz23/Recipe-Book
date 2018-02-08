import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [new Recipe('Dal Fry',
  'The tasty companion for your Chapatis!',
  'https://upload.wikimedia.org/wikipedia/commons/3/39/Daal_after_Tadka_Pulse_Soup_India.jpg'),
  new Recipe('Palak Paneer',
  'The Magic of spinach with Paneer!',
  'https://upload.wikimedia.org/wikipedia/commons/d/da/Yummy_Palak_Paneer.jpg')];

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

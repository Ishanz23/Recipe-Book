import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('Dal',
  'A neccessity with Rice',
  'https://upload.wikimedia.org/wikipedia/commons/3/39/Daal_after_Tadka_Pulse_Soup_India.jpg'),
  new Recipe('Dal',
  'A neccessity with Rice',
  'https://upload.wikimedia.org/wikipedia/commons/3/39/Daal_after_Tadka_Pulse_Soup_India.jpg')];

  constructor() { }

  ngOnInit() {
  }

}

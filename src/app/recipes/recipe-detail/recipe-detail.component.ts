import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  recipeSubscription: Subscription;
  recipe: Recipe = null;
  id: string;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.recipeSubscription = this.recipeService.getRecipe(this.id).subscribe(
          (recipe: Recipe) => {
            this.recipe = recipe;
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onShopping() {
      this.recipeService.addIngredientsToCart(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}

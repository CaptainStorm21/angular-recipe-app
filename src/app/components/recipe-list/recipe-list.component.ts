import { Component } from "@angular/core";
import { Recipe } from "src/app/model/recipe";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent {
  recipe_in_progress: Recipe;
  recipes: Recipe[];

  constructor() {
    this.recipe_in_progress = Recipe.createBlank();

    this.recipes = [
      new Recipe(
        "Banana bread",
        "Lorem ipsum banana bread",
        null,
        null,
        null,
        2,
        30
      ),
      new Recipe(
        "French Toast",
        "This is banana bread",
        null,
        null,
        null,
        2,
        30
      ),
      new Recipe(
        "BBQ Chicken",
        "This is banana bread",
        null,
        null,
        null,
        2,
        30
      ),
      new Recipe(
        "Grilled Pineapple",
        "This is banana bread",
        null,
        null,
        null,
        2,
        30
      )
    ];
  }

  addRecipeClicked(): void {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    //creates a new record and adds it to the top
    this.recipes.unshift(this.recipe_in_progress);
    //will blank out to a new recipe
    this.recipe_in_progress = Recipe.createBlank();

  }
}

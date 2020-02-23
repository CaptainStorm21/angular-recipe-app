import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    recipes: Recipe[];

    constructor() {
      this.recipes = [
        new Recipe ('Banana bread', 'Lorem ipsum banana bread', null, null, null),
        new Recipe ('French Toast', 'This is banana bread', null, null, null),
        new Recipe ('BBQ Chicken', 'This is banana bread', null, null, null),
        new Recipe ('Grilled Pineapple', 'This is banana bread', null, null, null)
      ];
    }
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipes',
  template: `
    <div class="row">
       <div class="col-sm-5">
        <rb-recipe-list [recipes]="recipes"></rb-recipe-list>
      </div>
       <div class="col-sm-7">
        <rb-recipe-details></rb-recipe-details>
      </div>
    </div>
  `,
  styles: []
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe('a', 'a description', 'a-url'),
      new Recipe('b', 'b description', 'b-url'),
      new Recipe('c', 'c description', 'c-url'),
    ];
  }

  public ngOnInit() {}
}

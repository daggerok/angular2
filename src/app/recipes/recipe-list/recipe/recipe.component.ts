import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'rb-recipe',
  templateUrl: './recipe.component.html',
  styles: []
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() {}
  public ngOnInit() {}
}

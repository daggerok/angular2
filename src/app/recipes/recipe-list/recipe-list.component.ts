import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [``]
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];
  constructor() {}
  public ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipes',
  template: `
    <div class="row">
       <div class="col-sm-5">
        list
      </div>
       <div class="col-sm-7">
        details
      </div>
    </div>
  `,
  styles: []
})
export class RecipesComponent implements OnInit {

  constructor() { }

  public ngOnInit() {}
}

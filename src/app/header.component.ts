import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-header',
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
      
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <ng-content></ng-content>
          </a>
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#">Recipes <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Shopping List</a></li>
          </ul>
          
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#"
                 class="dropdown-toggle" 
                 data-toggle="dropdown"
                 role="button"
                 aria-haspopup="true"
                 aria-expanded="false">User <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Login</a></li>
                <li><a href="#">Share</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div>
    </nav>
  `,
  styles: [``]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }
}

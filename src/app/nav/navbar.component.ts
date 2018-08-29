import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: [
      `
      .nav.navbar-nav {font-size: 15px;}
      #searchForm { margin-right: 80px;}
      @media (max-width: 1200px) {#searchForm {display:none}}
      `
  ]
})
export class NavbarAppComponent {
  title = 'app';
}
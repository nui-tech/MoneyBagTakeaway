import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="container pagenotfound">
      <section class="error404">
        <h1>Page not found</h1>
      </section>
    </div>
  `,
  styles: [`
  .pagenotfound {
    height: 40vh;
    display: table;
    text-align: center;
  }
  .error404 {
    display: table-cell;
    vertical-align: middle;
  }
  `]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

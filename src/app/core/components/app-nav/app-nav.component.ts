import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html'
})
export class AppNavComponent implements OnInit {
  logoPath = "/assets/logo/logo-text-ex.svg";
  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 414) {
      this.logoPath = "/assets/logo/logo-text-ex.png";
    } else {
      this.logoPath = "/assets/logo/logo-text-ex.svg";
    }
  }

}

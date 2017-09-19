import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
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

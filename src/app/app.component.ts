import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
logoPath = "/assets/logo/logo-text-ex.svg";
constructor() {

 }

  ngOnInit() {
    if (window.innerWidth < 414) {
      this.logoPath = "/assets/logo/logo-text-ex.png";
    } else {
      this.logoPath = "/assets/logo/logo-text-ex.svg";
    }
  }


}

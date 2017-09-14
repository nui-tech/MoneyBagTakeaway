import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

var firebaseConfig = {
    apiKey: "AIzaSyDXTMCESK3aeuMubO6zVTNYSh_Lwu4nYWA",
    authDomain: "moneybagthaichch.firebaseapp.com",
    databaseURL: "https://moneybagthaichch.firebaseio.com",
    projectId: "moneybagthaichch",
    storageBucket: "",
    messagingSenderId: "1041921628886"
  };

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

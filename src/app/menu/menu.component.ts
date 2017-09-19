import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = exEntree;

  constructor() { }

  ngOnInit() {
  }

}


export const exEntree = 
[
  {
      id:1,
      name: "Spring Roll",
      menuType: "entree",
      price: 7,
      description: "Vegetarian rolls served with a sweet chilli sauce",
      meats: ["vegetable"],
      picturePath:"http://img.taste.com.au/5YIjF0Rv/w720-h480-cfill-q80/taste/2016/11/pork-spring-rolls-89540-1.jpeg"
  },
  {
      id: 2,
      name: "Fish Cakes",
      menuType: "entree",
      price: 7,
      description: "Spicy fish cake with cucumber and sweet chilli sauce",
      meats: ["fish"],
      picturePath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45X1BzIGoagLTP0_wzfkx8brP9qUqdr8KUIiGWH18BZ1CW5KIg"
  },
  {
      id: 3,
      name: "Chicken Satay Stick",
      menuType: "entree",
      price: 8,
      description: "(3 sticks) Marinated chicken sticks serve with peanut sauce",
      meats: ["chicken"],
      picturePath:"http://colormemeg.com/wp-content/uploads/2014/02/thai-peanut-satay-sauce-recipe-cucumber-salad-5.jpg"
  },
  {
      id: 4,
      name: "Money Bags",
      menuType: "entree",
      price: 8,
      description: "(6 pieces) Wrapped with a mix of prawn, chicken and Thaivherbs, served with sweet chilli sauce",
      meats: ["prawn", "chicken"],
      picturePath:"https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
  },
  {
      id: 5,
      name: "Curry Puff",
      menuType: "entree",
      price: 8,
      description: "(5 pieces) Deep fried minced chicken with onion and kumara in a puff pastry",
      meats: ["chicken"],
      picturePath:"http://foodforfour.com/wp-content/uploads/2010/04/Curry-Puffs.jpg"
  },
  {
      id: 6,
      name: "Mixed entrée",
      menuType: "entree",
      price: 12,
      description: "Spring Rolls, Fish Cake, Gai Satay and Curry Puff",
      meats: ["prawn", "chicken","fish"],
      picturePath:"http://atthailandthairestaurant.com.au/images/restaurant/NSW/Bankstown/@Thailand/thai-mixed-entree.jpg"
  }
]

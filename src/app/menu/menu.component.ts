import { element } from 'protractor';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

    entrees = exEntree;
    riceNoodles = exRiceNoodles;
    stirFrieds = exStirFried;
    soups = exSoups;
    curries = exCurries;
    seafoods = exSeafoods;

    tabIndex = 0;
    fixTop: string;

    constructor(private _avRoute: ActivatedRoute,
        private _router: Router,
        private _title: Title
    ) { }

    ngOnInit() {     
        this._title.setTitle('Menu - Money Bag Thai Takeaway'); 
        window.addEventListener('scroll', this.scroll, true);
    }

    ngAfterViewInit(){
        let menuType = this._avRoute.snapshot.params['param'];
        // console.log(menuType);
        if(menuType == 'all')this.tabIndex = 0;
        else if(menuType == 'entree')this.tabIndex = 1;
        else if(menuType == 'riceandnoodle')this.tabIndex = 2;
        else if(menuType == 'stirfried')this.tabIndex = 3;
        else if(menuType == 'soup')this.tabIndex = 4;
        else if(menuType == 'curry')this.tabIndex = 5;
        else if(menuType == 'seafood')this.tabIndex = 6;
        else this.tabIndex = 0;
    }

    scroll = (): void => {
        //handle your scroll here
        //notice the 'odd' function assignment to a class field
        window.onscroll = function () {
            var doc = document.documentElement;
            var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            if (top >= 170) {
                document.getElementsByTagName("md-tab-header").item(0).classList.remove("mat-tab-header");
                document.getElementsByTagName("md-tab-header").item(0).classList.add("fixed-tap-top");
                document.getElementsByTagName("md-tab-header").item(0).classList.add("mat-tab-header-cust");

            } else if (top < 170) {
                document.getElementsByTagName("md-tab-header").item(0).classList.remove("fixed-tap-top");
                document.getElementsByTagName("md-tab-header").item(0).classList.add("mat-tab-header");

            }
        }

    };

    onSelectChange = ($event: any): void => {
        // console.log('event => ', $event);
        // console.log('index => ', $event.index); 
        let i = $event.index; 
        if(i == 0)this._router.navigate(['/menu', 'all']);
        else if(i == 1) this._router.navigate(['/menu', 'entree']);
        else if(i == 2) this._router.navigate(['/menu', 'riceandnoodle']);
        else if(i == 3) this._router.navigate(['/menu', 'stirfried']);
        else if(i == 4) this._router.navigate(['/menu', 'soup']);
        else if(i == 5) this._router.navigate(['/menu', 'curry']);
        else if(i == 6) this._router.navigate(['/menu', 'seafood']);
        else this._router.navigate(['/menu', 'all']);

    }


}


export const exEntree =
    [
        {
            id: 1,
            name: "Spring Roll",
            menuType: "entree",
            price: 7,
            description: "Vegetarian rolls served with a sweet chilli sauce",
            option: ["vegetable"],
            picturePath: "http://img.taste.com.au/5YIjF0Rv/w720-h480-cfill-q80/taste/2016/11/pork-spring-rolls-89540-1.jpeg"
        },
        {
            id: 2,
            name: "Fish Cakes",
            menuType: "entree",
            price: 7,
            description: "Spicy fish cake with cucumber and sweet chilli sauce",
            option: ["fish"],
            picturePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45X1BzIGoagLTP0_wzfkx8brP9qUqdr8KUIiGWH18BZ1CW5KIg"
        },
        {
            id: 3,
            name: "Chicken Satay Stick",
            menuType: "entree",
            price: 8,
            description: "(3 sticks) Marinated chicken sticks serve with peanut sauce",
            option: ["chicken"],
            picturePath: "http://colormemeg.com/wp-content/uploads/2014/02/thai-peanut-satay-sauce-recipe-cucumber-salad-5.jpg"
        },
        {
            id: 4,
            name: "Money Bags",
            menuType: "entree",
            price: 8,
            description: "(6 pieces) Wrapped with a mix of prawn, chicken and Thaivherbs, served with sweet chilli sauce",
            option: ["prawn", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 5,
            name: "Curry Puff",
            menuType: "entree",
            price: 8,
            description: "(5 pieces) Deep fried minced chicken with onion and kumara in a puff pastry",
            option: ["chicken"],
            picturePath: "http://foodforfour.com/wp-content/uploads/2010/04/Curry-Puffs.jpg"
        },
        {
            id: 6,
            name: "Mixed entrée",
            menuType: "entree",
            price: 12,
            description: "Spring Rolls, Fish Cake, Gai Satay and Curry Puff",
            option: ["prawn", "chicken", "fish"],
            picturePath: "http://atthailandthairestaurant.com.au/images/restaurant/NSW/Bankstown/@Thailand/thai-mixed-entree.jpg"
        }
    ];


export const exRiceNoodles =
    [
        {
            id: 1,
            name: "Pad Thai",
            price: 16,
            description: "Fried rice noodles with bean sprouts, egg & crushed peanut",
            option: ["beef", "pork", "chicken"],
            picturePath: "http://img.taste.com.au/5YIjF0Rv/w720-h480-cfill-q80/taste/2016/11/pork-spring-rolls-89540-1.jpeg"
        },
        {
            id: 2,
            name: "Fried Egg Noodles",
            menuType: "entree",
            price: 16,
            description: "Egg noodles fried with vegetables",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45X1BzIGoagLTP0_wzfkx8brP9qUqdr8KUIiGWH18BZ1CW5KIg"
        },
        {
            id: 3,
            name: "Khao Pad",
            menuType: "entree",
            price: 16,
            description: "Fried rice with vegetables & egg",
            option: ["beef", "pork", "chicken"],
            picturePath: "http://colormemeg.com/wp-content/uploads/2014/02/thai-peanut-satay-sauce-recipe-cucumber-salad-5.jpg"
        },
        {
            id: 4,
            name: "Gueyteow Pad Kee Mao",
            menuType: "entree",
            price: 16,
            description: "Fried rice noodles with chili & basil",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        }
    ];

export const exStirFried =
    [
        {
            id: 1,
            name: "Satay Peanut Sauce",
            price: 16,
            description: "Stir – fried vegetables with peanut sauce",
            option: ["beef", "pork", "chicken"],
            picturePath: "http://img.taste.com.au/5YIjF0Rv/w720-h480-cfill-q80/taste/2016/11/pork-spring-rolls-89540-1.jpeg"
        },
        {
            id: 2,
            name: "Sweet & sour",
            price: 16,
            description: "Stir – fried sweet & sauce with vegetables",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45X1BzIGoagLTP0_wzfkx8brP9qUqdr8KUIiGWH18BZ1CW5KIg"
        },
        {
            id: 3,
            name: "Pad Ginger",
            price: 16,
            description: "Stir – fried ginger, dried mushrooms & vegetables",
            option: ["beef", "pork", "chicken"],
            picturePath: "http://colormemeg.com/wp-content/uploads/2014/02/thai-peanut-satay-sauce-recipe-cucumber-salad-5.jpg"
        },
        {
            id: 4,
            name: "Pad Cashew nut",
            price: 16.50,
            description: "Stir – fried with cashew nuts & vegetables",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 5,
            name: "Chilli & Basil",
            price: 16,
            description: "Stir – fried with sweet basil and fresh chilli",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 6,
            name: "Pad Oyster sauce",
            price: 16,
            description: "Stir – fried vegetables with oyster sauce",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 7,
            name: "Garlic & Pepper Sauce",
            price: 16,
            description: "Stir – fried garlic, pepper and mushrooms",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 8,
            name: "Pad Curry paste",
            price: 16,
            description: "Stir – fried curry paste with vegetables and sweet basil",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 9,
            name: "Salad",
            price: 16,
            description: "Salad seasoned with lemon juice & chilli",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 10,
            name: "Larb",
            price: 16,
            description: "Spicy salad seasoned with lemon juice, chilli & mint",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        }
    ];
export const exSoups =
    [
        {
            id: 1,
            name: "Tom Yum Gai ",
            price: 10,
            description: "Chicken soup with lemongrass, mushroom & chilli",
            option: ["chicken"],
            picturePath: "http://img.taste.com.au/5YIjF0Rv/w720-h480-cfill-q80/taste/2016/11/pork-spring-rolls-89540-1.jpeg"
        },
        {
            id: 2,
            name: "Tom Yum Goong",
            price: 12,
            description: "Prawn soup with lemongrass, mushrooms & chilli",
            option: ["prawn"],
            picturePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45X1BzIGoagLTP0_wzfkx8brP9qUqdr8KUIiGWH18BZ1CW5KIg"
        },
        {
            id: 3,
            name: "Tom Yum Talay",
            price: 12,
            description: "Mixed seafood soup with lemongrass, mushrooms & chilli",
            option: ["mixed seafood"],
            picturePath: "http://colormemeg.com/wp-content/uploads/2014/02/thai-peanut-satay-sauce-recipe-cucumber-salad-5.jpg"
        },
        {
            id: 4,
            name: "Tom Kar Gai",
            price: 10,
            description: "Coconut milk soup with chicken, galangal & mushrooms",
            option: ["chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 5,
            name: "Tom Yum Tofu",
            price: 10,
            description: "Tofu soup with mushroom, lemongrass & chilli",
            option: ["tofu"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        }
    ];
export const exCurries =
    [
        {
            id: 1,
            name: "Green Curry",
            price: 16,
            description: "Green curry with coconut milk & bamboo shoots",
            option: ["beef", "pork", "chicken"],
            picturePath: "http://img.taste.com.au/5YIjF0Rv/w720-h480-cfill-q80/taste/2016/11/pork-spring-rolls-89540-1.jpeg"
        },
        {
            id: 2,
            name: "Panang Curry ",
            price: 16.50,
            description: "Thick curry with crushed peanut",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45X1BzIGoagLTP0_wzfkx8brP9qUqdr8KUIiGWH18BZ1CW5KIg"
        },
        {
            id: 3,
            name: "Red Curry",
            price: 16,
            description: "Red curry with coconut milk & bamboo shoots",
            option: ["beef", "pork", "chicken"],
            picturePath: "http://colormemeg.com/wp-content/uploads/2014/02/thai-peanut-satay-sauce-recipe-cucumber-salad-5.jpg"
        },
        {
            id: 4,
            name: "Pineapple Curry",
            price: 16.50,
            description: "Red curry with coconut milk & pineapple",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 5,
            name: "Massmun Curry",
            price: 16.50,
            description: "Brown curry with a hint of tamarind, spices & potato",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 6,
            name: "Yellow Curry",
            price: 16.50,
            description: "Yellow curry with onions & potato",
            option: ["beef", "pork", "chicken"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        }
    ];
export const exSeafoods =
    [
        {
            id: 1,
            name: "Pla Sarm Rod",
            price: 19,
            description: "Deep fried fish with three – flavoured chilli sauce",
            option: ["fish"],
            picturePath: "http://img.taste.com.au/5YIjF0Rv/w720-h480-cfill-q80/taste/2016/11/pork-spring-rolls-89540-1.jpeg"
        },
        {
            id: 2,
            name: "Fish Garlic & pepper",
            price: 19,
            description: "Deep fried fish with garlic & pepper sauce",
            option: ["fish"],
            picturePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45X1BzIGoagLTP0_wzfkx8brP9qUqdr8KUIiGWH18BZ1CW5KIg"
        },
        {
            id: 3,
            name: "Calamari Garlic & pepper",
            price: 19,
            description: "Stir – fried calamari with garlic & pepper sauce",
            option: ["calamari"],
            picturePath: "http://colormemeg.com/wp-content/uploads/2014/02/thai-peanut-satay-sauce-recipe-cucumber-salad-5.jpg"
        },
        {
            id: 4,
            name: "Calamari Salad",
            price: 19,
            description: "Spicy calamari salad with lemon juice & chilli",
            option: ["calamari"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 5,
            name: "Prawn Chilli",
            price: 19,
            description: "Stir – fried prawns with chilli, garlic & onion",
            option: ["prawn"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 6,
            name: "Prawn Cashew nuts",
            price: 19,
            description: "Stir – fried prawns with cashew nuts & vegetables",
            option: ["prawn"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 7,
            name: "Prawn Garlic & pepper",
            price: 19,
            description: "Stir – fried prawns with garlic & pepper sauce",
            option: ["prawn"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 8,
            name: "Prawn Oyster sauce",
            price: 19,
            description: "Stir – fried prawns with oyster sauce & vegetables",
            option: ["prawn"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        },
        {
            id: 9,
            name: "Mix Seafood Satay Peanut Sauce",
            price: 19,
            description: "Stir – fried mixed seafood, vegetables with satay sauce",
            option: ["mixed seafood"],
            picturePath: "https://static1.squarespace.com/static/5903f5baf5e2319ca1240757/t/590e7eaa6b8f5b01a700d254/1494122174547/money-bag-dumplings.jpg?format=1500w"
        }
    ];
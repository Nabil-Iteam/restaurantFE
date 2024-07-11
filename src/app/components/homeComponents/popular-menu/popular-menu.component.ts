import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-menu',
  templateUrl: './popular-menu.component.html',
  styleUrls: ['./popular-menu.component.css']
})
export class PopularMenuComponent implements OnInit {
  searchTerm: string = '';
  Items = [
    { name: 'Pork Sandwich', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_1.png' },
    { name: 'Roasted Marrow', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_2.png' },
    { name: 'Summer Cooking', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_3.png' },
    { name: 'Easter Delight', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_4.png' },
    { name: 'Tiener Schnitze', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_5.png' },
    { name: 'Chicken Roast', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_6.png' },
    { name: 'Pork Sandwich', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_1.png' },
    { name: 'Roasted Marrow', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_2.png' },
    { name: 'Summer Cooking', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_3.png' },
    { name: 'Easter Delight', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_4.png' },
    { name: 'Tiener Schnitze', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_5.png' },
    { name: 'Chicken Roast', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_6.png' },
    { name: 'Pork Sandwich', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_1.png' },
    { name: 'Roasted Marrow', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_2.png' },
    { name: 'Summer Cooking', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_3.png' },
    { name: 'Easter Delight', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_4.png' },
    { name: 'Tiener Schnitze', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_5.png' },
    { name: 'Chicken Roast', description: "They're wherein heaven seed hath nothing", price: 40, img: './assets/img/food_menu/single_food_6.png' }
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

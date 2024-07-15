import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-popular-menu',
  templateUrl: './popular-menu.component.html',
  styleUrls: ['./popular-menu.component.css']
})
export class PopularMenuComponent implements OnInit {
  searchTerm: string = ''; // Terme de recherche pour filtrer les plats
  items: any = []; // Liste des plats
  image : any ="./assets/img/food_menu/single_food_1.png"

  constructor(private dServie:DishService ) { }

  ngOnInit(): void {
    this.dServie.getAllDishes().subscribe(
      (res)=>{
        console.log("this is res from BE", res);
        this.items = res;
      }
    )
  }

  showDetails(){}
}

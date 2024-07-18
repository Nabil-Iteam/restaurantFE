import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-display-dish',
  templateUrl: './display-dish.component.html',
  styleUrls: ['./display-dish.component.css']
})
export class DisplayDishComponent implements OnInit {
dish : any={};
id !: number;
img : string = "";
image : any ="./assets/img/food_menu/single_food_1.png"
  constructor(private dService : DishService, private activatedRoute :ActivatedRoute ) { }
  quantity: number = 1;

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.dService.getDishById(this.id).subscribe(
      (res)=>{
        console.log("this is a result from BE", res);
        this.dish = res;
        
      }
      )
  }
  addToCart(){}

}

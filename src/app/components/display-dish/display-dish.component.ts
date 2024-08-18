import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-display-dish',
  templateUrl: './display-dish.component.html',
  styleUrls: ['./display-dish.component.css']
})
export class DisplayDishComponent implements OnInit {
  dish: any = {};
  id!: number;
  img: string = "";
  image: any = "./assets/img/food_menu/single_food_1.png";
  quantity: number = 1;

  constructor(
    private dService: DishService,
    private activatedRoute: ActivatedRoute,
    private rService : ReservationService,
    private router : Router

    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.dService.getDishById(this.id).subscribe(
      (res) => {
        console.log("this is a result from BE", res);
        this.dish = res;
      }
    )
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    const reservation = {
      quantity: this.quantity,
      confirmed: false,
      dish: { id: this.dish.id },
      user: { id: 1 }
    };

    this.rService.addReservation(reservation).subscribe(
      (res) => {
        console.log("Reservation created:", res);
        this.router.navigate(['menu'])
      }
      /* (error) => {
        console.error("Error creating reservation:", error);
      } */
    );
  }
}

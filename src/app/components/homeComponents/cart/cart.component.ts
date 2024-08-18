import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: any = [];
  total: number = 0;
  id!: number;
  imageUrl: any =
    'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp';
  constructor(
    private rService: ReservationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rService.getAllReservations().subscribe((res) => {
      console.log('this is res from BE', res);
      this.items = res;
      this.totalCart();
    });
  }

  totalCart(): void {
    this.total = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.total += this.items[i].dish.price;
    }
    console.log('Total cart value:', this.total);
  }

  deleteReservation(id: number) {
    this.rService.deleteReservationById(id).subscribe((res) => {
      console.log('delete from dish ', id);
      this.rService.getAllReservations().subscribe((res) => {
        console.log('this is res from BE', res);
        this.items = res;
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = {
    items: [
      { name: 'Iphone 11 pro', description: '256GB, Navy Blue', quantity: 2, price: 900, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp' },
      { name: 'Samsung galaxy Note 10', description: '256GB, Navy Blue', quantity: 2, price: 900, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp' },
      { name: 'Canon EOS M50', description: 'Onyx Black', quantity: 1, price: 1199, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp' },
      { name: 'MacBook Pro', description: '1TB, Graphite', quantity: 1, price: 1799, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp' },
      { name: 'Iphone 11 pro', description: '256GB, Navy Blue', quantity: 2, price: 900, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp' },
      { name: 'Samsung galaxy Note 10', description: '256GB, Navy Blue', quantity: 2, price: 900, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp' },
      { name: 'Canon EOS M50', description: 'Onyx Black', quantity: 1, price: 1199, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp' },
      { name: 'MacBook Pro', description: '1TB, Graphite', quantity: 1, price: 1799, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp' }
    ],
    total: 4818
  };
  constructor() { }

  ngOnInit(): void {
  }

}

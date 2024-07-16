import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    // items = [
    //   { id: 1,name: 'Iphone 11 pro',number: 3, description: '256GB, Navy Blue', quantity: 2, price: 900, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp' },
    //   { id: 2,name: 'Samsung galaxy Note 10',number: 3, description: '256GB, Navy Blue', quantity: 2, price: 900, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp' },
    //   { id: 3,name: 'Canon EOS M50',number: 3, description: 'Onyx Black', quantity: 1, price: 1199, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp' },
    //   { id: 4,name: 'MacBook Pro',number: 3, description: '1TB, Graphite', quantity: 1, price: 1799, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp' },
    //   { id: 5,name: 'Iphone 11 pro',number: 3, description: '256GB, Navy Blue', quantity: 2, price: 900, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp' },
    //   { id: 6,name: 'Samsung galaxy Note 10',number: 3, description: '256GB, Navy Blue', quantity: 2, price: 900, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp' },
    //   { id: 7,name: 'Canon EOS M50', number: 3,description: 'Onyx Black', quantity: 1, price: 1199, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp' },
    //   { id: 8,name: 'MacBook Pro',number: 3, description: '1TB, Graphite', quantity: 1, price: 1799, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp' }
    // ];
    items :any = []
    total: number = 4818;
    id !: number;
    imageUrl : any = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp'
  constructor(private dService : DishService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.dService.getAllDishes().subscribe(
      (res)=>{
        console.log("this is res from BE", res);
        this.items = res ; 
        
      }
    )
  }

  deleteDish(id:number){
    this.dService.deleteDishById(id).subscribe(
      (res)=>{
        console.log("delete from dish " , id);
        this.dService.getAllDishes().subscribe(
          (res)=>{
            console.log("this is res from BE", res);
            this.items = res ; 
            
          }
        )
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  dish: any = {}; 
  selectedChef = ''; 
  chefs: any = [{id:1 , firstName : "Nabil" , lastName :"Najeh"}];
  id: number = 0;
  dishForm !: FormGroup ;

  constructor(
    private dishService: DishService,
    private userService : UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.userService.getUserByRole("chef").subscribe(
    //   (res)=>{
    //     console.log("this res from BE to show Chefs",res);
    //     this.chefs = res ;
    //   }
    // )
  }

  addDish(): void {
    if (!this.dish.name || !this.dish.description || !this.dish.price || !this.selectedChef) {
      alert('All fields are required!');
      return;
    }
    
    this.dishService.addDish(this.dish).subscribe(
      (res)=>{
        console.log("this res from BE",res);
      }
    )
  }
}

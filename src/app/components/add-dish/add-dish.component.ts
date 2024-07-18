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
  chefs: any = [];
  allUsers: any = [];
  chefId!: any;
  dishForm!: FormGroup;
  role = "chef";

  constructor(
    private dishService: DishService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.userService.getUsersByRole(this.role).subscribe(
      (res)=>{
        console.log("this is res of all chefs",res);
        this.chefs = res ;
        
      }
    )
  }

  selectChef(evt: any): void {
    console.log("here chef id", evt.target.value);
    this.chefId = evt.target.value;
  }

  addDish(): void {
    if (!this.dish.name || !this.dish.description || !this.dish.price || !this.chefId) {
      alert('All fields are required!');
      return;
    }

    console.log("hello friend this is id ", this.chefId);
    console.log("this is dish", this.dish);
    this.dish.user = { id: Number(this.chefId) };
    console.log("this is dish after push user id ",this.dish);
    
    this.dishService.addDish(this.dish).subscribe(
      (res) => {
        console.log("this res from BE", res);
      }
    );
  }
}

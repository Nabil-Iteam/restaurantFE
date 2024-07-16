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
  chefs: any = [
    {id:1 , firstName : "Nabil" , lastName :"Najeh"},
    {id:2 , firstName : "Chef" , lastName :"Bourek"},
    {id:3 , firstName : "Nabil" , lastName :"Najeh"},
    ];
    chefId !: any ;
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
  selectChef(evt : any){
    console.log("here chef id", evt.target.value);
    this.chefId = evt.target.value ;
  }

  addDish(): void {
    if (!this.dish.name || !this.dish.description || !this.dish.price || !this.chefId) {
      alert('All fields are required!');
      return;
    }

    // this.dish.chefId = {id: Number(this.chefId)};
    console.log("hello friend this is id ",this.dish.chefId);
    console.log("this is dish",this.dish);
    
    this.dishService.addDish(this.dish).subscribe(
      (res)=>{
        console.log("this res from BE",res);
      }
    )
  }
  
}

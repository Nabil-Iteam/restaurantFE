import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})
export class EditDishComponent implements OnInit {
  chefs: any = [
    {id:1 , firstName : "Nabil" , lastName :"Najeh"},
    {id:2 , firstName : "Chef" , lastName :"Bourek"},
    {id:3 , firstName : "Nabil" , lastName :"Najeh"},
    ];
    chefId !: any ;
    dishForm !: FormGroup ;
  id : any ;
  dish : any ={};

  constructor(private dService : DishService , private router : Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.dService.getDishById(this.id).subscribe(
      (res)=>{
        console.log("this is res from BE" , res);
        this.dish = res ;
      }
    )
  }
  selectChef(evt : any){
    console.log("here chef id", evt.target.value);
    this.chefId = evt.target.value ;
  }

    
  editDish(){
    if (!this.dish.name || !this.dish.description || !this.dish.price || !this.chefId) {
      alert('All fields are required!');
      return;
    }
    
    this.dService.updateDish(this.dish).subscribe(
      (res)=>{
        console.log("Dish id : " + this.id +" succes updated and this is res From BE " , res);
        
      }
    )
  }

}

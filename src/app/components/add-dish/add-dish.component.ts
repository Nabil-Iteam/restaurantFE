import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  addDishForm !: FormGroup
  dish:any = {};
  selectedChef !:""
  chefs = [
    { id: '1', firstName: 'John', lastName: 'Doe' },
    { id: '2', firstName: 'Jane', lastName: 'Smith' },
    { id: '3', firstName: 'Michael', lastName: 'Brown' }
    // Ajoutez autant de chefs que nécessaire avec leurs données
  ];

  

  constructor(private dishService : DishService , private router :Router) { }

  ngOnInit(): void {
    
    console.log("sdsds",this.dish);
    
  }
  addDish(): void {
    this.dishService.addDish(this.dish).subscribe(
      
      (res)=>{
        console.log("sendeeeeeeeed",this.dish);
        console.log("this is res from BE",res);
        this.dish = res;
        this.router.navigate([''])
        
      }
    )
  }

}

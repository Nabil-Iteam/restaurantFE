import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-dishes-table',
  templateUrl: './dishes-table.component.html',
  styleUrls: ['./dishes-table.component.css']
})
export class DishesTableComponent implements OnInit {

  dishes : any = []
  constructor(
    private dService : DishService,
    private router :Router
    ) { }

  ngOnInit(): void {
    this.dService.getAllDishes().subscribe(
      (res)=>{
        console.log("this is result from BE",res);
        this.dishes = res
      }
    )
  }

  displayDish(id : number){
    console.log("this is route " ,this.router.navigate(['displayDish/'+id]));
    
    this.router.navigate(['displayDish/'+id])
    
  }

  deleteDish(id : number){
    this.dService.deleteDishById(id).subscribe(
      (res)=>{
        console.log("this is res of BE",res);
        this.dService.getAllDishes().subscribe(
          (res)=>{
            console.log("this is result from BE after delete",res);
            this.dishes = res
          }
        )
        
      }
    )
  }

  editDish(id : number){
    this.router.navigate(['editDish/'+id])
  }

}

import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-dishes-table',
  templateUrl: './dishes-table.component.html',
  styleUrls: ['./dishes-table.component.css']
})
export class DishesTableComponent implements OnInit {

  dishes : any = []
  constructor(private dService : DishService) { }

  ngOnInit(): void {
    this.dService.getAllDishes().subscribe(
      (res)=>{
        console.log("this is result from BE",res);
        this.dishes = res
      }
    )
  }

  displayDish(){}
  deleteDish(){}
  editDish(){}

}

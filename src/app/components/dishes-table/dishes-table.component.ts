import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes-table',
  templateUrl: './dishes-table.component.html',
  styleUrls: ['./dishes-table.component.css']
})
export class DishesTableComponent implements OnInit {

  dishes = [
    { id: 1, nom: 'Pork Sandwich', description: 'Delicious pork sandwich', prix: 40.00 },
    { id: 1, nom: 'Pork Sandwich', description: 'Delicious pork sandwich', prix: 40.00 },
    { id: 1, nom: 'Pork Sandwich', description: 'Delicious pork sandwich', prix: 40.00 },
    // Ajoutez d'autres plats ici
  ];
  constructor() { }

  ngOnInit(): void {
  }

  displayDish(){}
  deleteDish(){}
  editDish(){}

}

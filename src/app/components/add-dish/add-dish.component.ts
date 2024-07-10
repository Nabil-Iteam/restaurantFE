import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  

  constructor() { }

  ngOnInit(): void {
  }
  addDish(): void {
    // Vous pouvez implémenter ici la logique pour ajouter le plat
    console.log('Plat à ajouter : ', this.dish);
    console.log('Chef sélectionné : ', this.selectedChef);
    // Exemple : appel à un service pour ajouter le plat avec le chef sélectionné
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  dish: any = {}; // Objet plat
  selectedChef = ''; // Chef sélectionné
  chefs = [
    { id: '1', firstName: 'John', lastName: 'Doe' },
    { id: '2', firstName: 'Jane', lastName: 'Smith' },
    { id: '3', firstName: 'Michael', lastName: 'Brown' }
  ]; // Liste des chefs

  id: any; // Identifiant du plat

  constructor(
    private dishService: DishService,
    private router: Router
      ) { }

  ngOnInit(): void {
    // Initialiser l'objet plat
    this.dish = {
      name: '',
      description: '',
      price: '',
      chef: ''
    };
  }

  addDish(): void {
    if (!this.dish.name || !this.dish.description || !this.dish.price || !this.selectedChef) {
      alert('All fields are required!');
      return;
    }

    const storedDishJSON = localStorage.getItem('dish');
    let storedDishes = storedDishJSON ? JSON.parse(storedDishJSON) : [];

    this.id = storedDishes.length ? storedDishes[storedDishes.length - 1].id + 1 : 1;

    const newDish = {
      id: this.id,
      name: this.dish.name,
      description: this.dish.description,
      price: this.dish.price,
      chef: this.selectedChef
    };

    storedDishes.push(newDish);

    localStorage.setItem('dish', JSON.stringify(storedDishes));

    console.log('Dish added:', newDish);

    // Réinitialiser le formulaire
    this.dish = {
      name: '',
      description: '',
      price: '',
      chef: ''
    };
    this.selectedChef = '';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-menu',
  templateUrl: './popular-menu.component.html',
  styleUrls: ['./popular-menu.component.css']
})
export class PopularMenuComponent implements OnInit {
  searchTerm: string = ''; // Terme de recherche pour filtrer les plats
  items: any[] = []; // Liste des plats

  constructor() { }

  ngOnInit(): void {
    // Récupérer les plats stockés dans le local storage
    const storedDishJSON = localStorage.getItem('dish');
    this.items = storedDishJSON ? JSON.parse(storedDishJSON) : [];

    // Afficher les plats récupérés dans la console
    console.log('Dishes from local storage:', this.items);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef-table',
  templateUrl: './chef-table.component.html',
  styleUrls: ['./chef-table.component.css']
})
export class ChefTableComponent implements OnInit {
  chefs = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Street', specialty: 'Italian', experience: 10 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', phone: '987-654-3210', address: '456 Avenue', specialty: 'French', experience: 8 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  displayChef(){}
  deleteChef(){}
  editChef(){}
}

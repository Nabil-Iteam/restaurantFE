import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users = [
    { id: 1, firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com', phone: '555-555-5555', address: '789 Road' },
    { id: 2, firstName: 'Bob', lastName: 'Brown', email: 'bob@example.com', phone: '444-444-4444', address: '101 Highway' }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  displayUser(){}
  deleteUser(){}
  editUser(){}

}

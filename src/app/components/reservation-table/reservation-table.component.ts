import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent implements OnInit {

  reservations = [
    { id: 1, client: 'John Doe', plat: 'Pork Sandwich', date: '2024-07-01', nombrePlats: 2 },
    { id: 1, client: 'John Doe', plat: 'Pork Sandwich', date: '2024-07-01', nombrePlats: 2 },
    { id: 1, client: 'John Doe', plat: 'Pork Sandwich', date: '2024-07-01', nombrePlats: 2 },
    // Ajoutez d'autres réservations ici
  ];
  constructor() { }

  ngOnInit(): void {
    
  }
  displayReservation(){}
  deleteReservation(){}
  editReservation(){}

}

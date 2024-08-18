import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent implements OnInit {

  reservations :any = [];
  constructor(private sReservation : ReservationService , private router : Router) { }

  ngOnInit(): void {
    console.log('this is reservation from BE');
    this.sReservation.getAllReservations().subscribe(
      (res)=> {
        console.log('this is reservation from BE' , res);
        this.reservations = res ;
      }
      )
  }
  
  displayReservation(id : number){
    this.router.navigate(['reservationDetails/'+id]) 
   }

  deleteReservation(id : number){
    this.sReservation.deleteReservationById(id).subscribe(
      (res)=>{
        console.log(`succes delete from reservation has id ${id } this is rest of reservation ${res}`);
        this.sReservation.getAllReservations().subscribe(
          (res)=> {
            this.reservations = res ;
          }

        )
      }
    )
  }

}

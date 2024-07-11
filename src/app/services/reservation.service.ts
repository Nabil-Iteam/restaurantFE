import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationURL: string = "http://localhost:8090/api/reservations";

  constructor(private httpClient: HttpClient) { }

  getAllReservations() {
    return this.httpClient.get(this.reservationURL);
  }

  getReservationById(id: number) {
    return this.httpClient.get(`${this.reservationURL}/${id}`);
  }

  deleteReservationById(id: number) {
    return this.httpClient.delete(`${this.reservationURL}/${id}`);
  }

  addReservation(obj: any) {
    return this.httpClient.post(this.reservationURL, obj);
  }
}

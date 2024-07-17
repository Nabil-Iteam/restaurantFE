import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseURL: string = "http://localhost:8090/api/reservations";

  constructor(private httpClient: HttpClient) { }

  getAllReservations() {
    return this.httpClient.get(this.baseURL);
  }

  getReservationById(id: number) {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  deleteReservationById(id: number) {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  addReservation(obj: any) {
    return this.httpClient.post(this.baseURL, obj);
  }
}

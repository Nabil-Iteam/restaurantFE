import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishURL: string = "http://localhost:8090/api/dishes";

  constructor(private httpClient: HttpClient) { }

  getAllDishes() {
    return this.httpClient.get(this.dishURL);
  }

  getDishById(id: number) {
    return this.httpClient.get(`${this.dishURL}/${id}`);
  }

  deleteDishById(id: number) {
    return this.httpClient.delete(`${this.dishURL}/${id}`);
  }

  updateDish(obj: any) {
    return this.httpClient.put(this.dishURL, obj);
  }

  addDish(obj: any) {
    return this.httpClient.post(this.dishURL, obj);
  }
}

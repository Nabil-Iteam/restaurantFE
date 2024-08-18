import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8090/api/carts'; 

  constructor(private httpClient: HttpClient) {}

  getAllCarts() {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getCartById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  deleteCartById(id: number) {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  saveCart(cart: any) {
    return this.httpClient.post(this.baseUrl, cart);
  }
}
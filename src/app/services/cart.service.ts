import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private loginService: LoginService) {
    this.cartSubject.next(this.loadCart());
  }

  getCart(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  addProduct(product: Product): void {
    const cart = [...this.cartSubject.value];

    cart.push(product);

    this.updateCart(cart);
  }

  removeProduct(productId: number): void {

    const cart = [...this.cartSubject.value];

    const index = cart.findIndex(p => p.product_id === productId);

    if (index !== -1) {
      cart.splice(index, 1);
    }

    this.updateCart(cart);
  }

  clearCart(): void {
    this.updateCart([]);
  }

  getCartCount(): number {
    return this.cartSubject.value.length;
  }

  getCartTotal(): number {
    return this.cartSubject.value.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }

  // almacenamiento de cada usuario

  private getStorageKey(): string {

    const user = this.loginService.getCurrentUser();

    if (user) {
      return `cart_items_user_${user.id}`;
    }

    return 'cart_items_guest';
  }

  private loadCart(): Product[] {

    const stored = localStorage.getItem(this.getStorageKey());

    return stored ? JSON.parse(stored) : [];
  }

  private updateCart(cart: Product[]): void {

    localStorage.setItem(this.getStorageKey(), JSON.stringify(cart));

    this.cartSubject.next(cart);
  }

  reloadCart(): void {
    this.cartSubject.next(this.loadCart());
  }
}
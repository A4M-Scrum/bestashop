import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private readonly discount = 0.30;

  constructor(private loginService: LoginService) { }

  getFinalPrice(product: Product): number {

    const user = this.loginService.getCurrentUser();

    if (product.onSale && user) {
      return product.price * (1 - this.discount);
    }

    return product.price;
  }

  hasDiscount(product: Product): boolean {

    const user = this.loginService.getCurrentUser();

    return product.onSale && !!user;
  }

}
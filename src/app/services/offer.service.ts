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

    let finalPrice = product.price;

    if (product.onSale && user) {
      finalPrice = product.price * (1 - this.discount);
    }

    return Number(finalPrice.toFixed(2));
  }

  hasDiscount(product: Product): boolean {

    const user = this.loginService.getCurrentUser();

    return product.onSale && !!user;
  }

}
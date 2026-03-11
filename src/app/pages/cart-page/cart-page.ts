import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferService } from '../../services/offer.service';
import { CartService } from '../../services/cart.service';

import { Product } from '../../models/product.model';

import { Checkout } from '../../components/checkout/checkout';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CommonModule,
    Checkout,
  ],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage implements OnInit {

  cartItems: Product[] = [];
  cartTotal = 0;

  constructor(
    private readonly cartService: CartService,
    public offerService: OfferService) { }

  ngOnInit(): void {

    this.cartService.getCart().subscribe(cart => {

      this.cartItems = cart;

      this.cartTotal = cart.reduce((total, product) => {

        if (this.offerService.hasDiscount(product)) {
          return total + this.offerService.getFinalPrice(product);
        }

        return total + product.price;
      }, 0);
    });

  }

  removeFromCart(productId: number): void {
    this.cartService.removeProduct(productId);
  }

}
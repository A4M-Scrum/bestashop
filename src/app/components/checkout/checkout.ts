import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../../services/cart.service';
import { OfferService } from '../../services/offer.service';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  @Input() cartItems: Product[] = [];

  ticket: string | null = null;

  constructor(
    private cartService: CartService,
    private offerService: OfferService
  ) { }

  checkout(): void {
    if (!this.cartItems.length) return;

    let total = 0;

    const lines = this.cartItems.map(item => {
      const price = this.offerService.hasDiscount(item)
        ? this.offerService.getFinalPrice(item)
        : item.price;

      total += price;

      return `${item.name} - ${price.toFixed(2)}€`;
    });

    lines.push(`-------------------`);
    lines.push(`Total: ${total.toFixed(2)}€`);

    this.ticket = lines.join('\n');

    this.cartService.clearCart();
  }
}

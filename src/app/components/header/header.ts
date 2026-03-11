import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { LoginService } from '../../services/login.service';

import { Theme } from '../theme/theme';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    Theme,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isMenuOpen = false;

  cartCount = 0;

  constructor(
    public loginService: LoginService,
    private readonly cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cartCount = cart.length;
    });
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }

  get currentUser() {
    return this.loginService.getCurrentUser();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

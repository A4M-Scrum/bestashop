import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { User } from '../../models/user.model';

import { LoginService } from '../../services/login.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';

  message: string = '';
  isError: boolean = false;

  currentUser: User | null = null;

  constructor(
    private readonly loginService: LoginService,
    private readonly cartService: CartService
  ) { }

  onSubmit(): void {

    if (!this.email || !this.password) {
      this.message = 'Todos los campos son obligatorios';
      this.isError = true;
      return;
    }

    const user = this.loginService.login(this.email, this.password);

    if (!user) {
      this.message = 'Credenciales incorrectas';
      this.isError = true;
      this.currentUser = null;
      return;
    }

    this.currentUser = user;

    this.cartService.reloadCart();

    this.message = `Bienvenido, ${user.name}`;
    this.isError = false;

    this.email = '';
    this.password = '';
  }

  logout(): void {
    this.loginService.logout();
    this.cartService.reloadCart();
    this.currentUser = null;
    this.message = '';
  }
}

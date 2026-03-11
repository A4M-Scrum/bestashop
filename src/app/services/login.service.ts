import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly storageKey = 'users';
  private readonly sessionKey = 'currentUser';

  constructor() { }

  private getUsers(): User[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  login(email: string, password: string): User | null {

    const users = this.getUsers();

    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem(this.sessionKey, JSON.stringify(user));
      return user;
    }

    return null;
  }

  logout(): void {
    localStorage.removeItem(this.sessionKey);
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem(this.sessionKey);
    return user ? JSON.parse(user) : null;
  }

}
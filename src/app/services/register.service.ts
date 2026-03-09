import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly storageKey = 'users';

  constructor() { }

  getUsers(): User[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  register(user: Omit<User, 'id'>): User | null {

    const users = this.getUsers();

    const emailExists = users.some(u => u.email === user.email);

    if (emailExists) {
      return null;
    }

    const newUser: User = {
      id: Date.now(),
      ...user
    };

    users.push(newUser);

    localStorage.setItem(this.storageKey, JSON.stringify(users));

    return newUser;
  }
}
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  constructor(private router: Router) {
    const userStorage = window.localStorage.getItem('user');
    if (!!userStorage) {
      this.user = JSON.parse(userStorage);
    } else {
      this.user = {
        id: '',
        name: '',
      };
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'master@lemoncode.net' && password === '12345678') {
      this.user = {
        id: '1',
        name: 'Admin',
      };

      window.localStorage.setItem('user', JSON.stringify(this.user));
      return true;
    }

    return false;
  }

  logout(): void {
    this.user = {
      id: '',
      name: '',
    };

    window.localStorage.setItem('user', JSON.stringify(this.user));
  }

  isLogged(): boolean {
    return !!this.user.id;
  }

  getUsername(): string {
    return this.user.name;
  }
}

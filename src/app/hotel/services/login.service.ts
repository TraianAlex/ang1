import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor() { }

  login(email: string, password: string) {
    if (email === 'traian.alexandru@ge.com' && password === 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if (email === 'traian.alexandru@ge.com' && password === 'user') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}

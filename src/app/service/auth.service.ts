import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  clearToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: { email: string, password: string }): Observable<string | boolean> {
    if (userInfo.email === 'admin@mail.me' && userInfo.password === 'admin123') {
      this.clearToken();
      this.setToken('admin:admin123');
      return of(true);
    }
    return throwError(() => new Error('Failed login'));
  }
}

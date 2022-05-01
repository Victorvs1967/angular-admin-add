import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private adminIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    this.loggedIn.next(this.getToken() ? true : false);
    return this.loggedIn.asObservable();
  }

  get isAdmin(): Observable<boolean> {
    this.loggedIn.next(this.getToken() === 'admin:admin123' ? true : false);
    return this.adminIn.asObservable();
  }

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

  onLogin(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  onAdmin(): boolean {
    return this.getToken() === 'admin:admin123' ? true : false;
  }

  login(userInfo: { email: string, password: string }): Observable<string | boolean> {
    if (userInfo.email === 'admin@mail.me' && userInfo.password === 'admin123') {
      this.clearToken();
      this.setToken('admin:admin123');
      this.loggedIn.next(true);
      this.adminIn.next(true);
      return of(true);
    } else if (userInfo.email !== '' && userInfo.password !== '') {
      this.clearToken();
      this.setToken(userInfo.email.concat(':').concat(userInfo.password));
      this.loggedIn.next(true);
      this.adminIn.next(false);
      return of(true);
    }
    this.loggedIn.next(false);
    this.adminIn.next(false);
    return throwError(() => new Error('Failed login'));
  }

  logout() {
    this.loggedIn.next(false);
    this.adminIn.next(false);
    this.clearToken();
    setTimeout(() => {}, 500);
  }
}

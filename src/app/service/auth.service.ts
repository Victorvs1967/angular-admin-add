import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../model/role.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUsername: string | undefined;

  private loggedIn = new BehaviorSubject<boolean>(false);
  private adminIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    this.loggedIn.next(this.onLogin());
    return this.loggedIn.asObservable();
  }

  get isAdmin(): Observable<boolean> {
    this.adminIn.next(this.onLogin());
    return this.adminIn.asObservable();
  }

  constructor(private http: HttpClient) { }

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  clearToken() {
    sessionStorage.removeItem('token');
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  onLogin(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  onAdmin(): Observable<boolean | any> {
    return this.http.get<User>(environment.baseUrl.concat(environment.apiUrl).concat('/').concat(this.isUsername!)).pipe(map(user => {
      console.log(user);
      this.adminIn.next(user.role === 'ADMIN');
      return of(user.role === Role.ADMIN)
    }));

  }

  login(userInfo: { username: string, password: string }): Observable<any | boolean> {
    return this.http.post(environment.baseUrl.concat(environment.authUrl).concat('/login'), userInfo).pipe(map((token: any) => {
        this.clearToken();
        this.setToken(token.token);
        this.loggedIn.next(true);
        this.isUsername = userInfo.username;
        return of(true);
      }
    ));

    // if (userInfo.email === 'admin@mail.me' && userInfo.password === 'admin123') {
    //   this.clearToken();
    //   this.setToken('admin:admin123');
    //   this.loggedIn.next(true);
    //   this.adminIn.next(true);
    //   return of(true);
    // } else if (userInfo.email !== '' && userInfo.password !== '') {
    //   this.clearToken();
    //   this.setToken(userInfo.email.concat(':').concat(userInfo.password));
    //   this.loggedIn.next(true);
    //   this.adminIn.next(false);
    //   return of(true);
    // }

    this.loggedIn.next(false);
    this.adminIn.next(false);
    return throwError(() => new Error('Failed login'));
  }

  // signup(userInfo: { username: string, password: string, email: string }): Observable<any | boolean> {
  signup(user: User): Observable<any | boolean> {
    return this.http.post(environment.baseUrl.concat(environment.authUrl).concat('/signup'), user)
  }

  logout() {
    this.loggedIn.next(false);
    this.adminIn.next(false);
    this.clearToken();
    setTimeout(() => {}, 500);
  }
}

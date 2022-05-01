import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getPersonList() {
    return this.http.get<User[]>(environment.apiUrl.concat(environment.usersSfx))
  }

  getPerson(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/${id}`);
  }
}

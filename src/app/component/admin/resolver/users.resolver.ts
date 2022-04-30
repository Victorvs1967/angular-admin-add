import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { AdminService } from '../service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {

  constructor(private admin: AdminService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.admin.getPersonList().pipe(
      delay(2000)
    );
  }
}

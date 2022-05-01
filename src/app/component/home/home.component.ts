import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAdmin: Observable<boolean> | undefined;
  isLogin: Observable<boolean> | undefined;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin;
    this.isLogin = this.auth.isLoggedIn;
  }
}

import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, map, merge, Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLoader: Observable<boolean> | undefined;
  hideLoader: Observable<boolean> | undefined;
  isLoading: Observable<boolean> | undefined;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

    this.hideLoader = this.router.events.pipe(filter(event => event instanceof ResolveEnd), map(() => false));
    this.showLoader = this.router.events.pipe(filter(event => event instanceof ResolveStart), map(() => true));
    this.isLoading = merge(this.hideLoader, this.showLoader);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}

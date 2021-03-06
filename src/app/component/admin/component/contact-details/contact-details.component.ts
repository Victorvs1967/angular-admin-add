import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, map, mapTo, merge, Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  user: Observable<User> | undefined;
  foolName: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.route.data.pipe(map(data => data?.['user'])); //get data with resolver
    this.user.subscribe(user => this.foolName = user.firstName !== null ? user.firstName.concat(' ').concat(user.lastName) : '');

    // this.route.params.subscribe(data => this.user = this.admin.getPerson(data?.['id']));
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, map, merge, Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  personList: Observable<User[]> | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.personList = this.route.data.pipe(map(data => data?.['users']));    
    // this.personList = this.admin.getPersonList();
}

}

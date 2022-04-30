import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  user?: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

}

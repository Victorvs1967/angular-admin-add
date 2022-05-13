import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  signupForm?: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: [ '', [ Validators.required ] ],
      password: [ '', [ Validators.required ] ],
      email: [ '', [ Validators.required, Validators.email ] ],
      firstName: [ '' ],
      lastName: [ '' ],
      phone: [ '' ],
      address: [ '' ]
    });
  }

  submitSignup() {
    this.auth.signup(this.signupForm?.value).subscribe({
      next: () => {
        this.signupForm?.reset();
        this.router.navigate(['login']);
      },
      error: err => alert(err.message)
    });
  }



}

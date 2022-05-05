import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm?: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [ '', [ Validators.required ] ],
      password: [ '', [ Validators.required ] ]
      // email: [ '', [ Validators.required, Validators.email ] ],
      // password: [ '', [ Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) ] ]
    });
    if (this.auth.isLoggedIn) this.router.navigate(['admin']);
  }

  submitLogin() {
    this.auth.login(this.loginForm?.value).subscribe({
      next: () => {
        this.router.navigate(['admin']);
        this.loginForm?.reset();
      },
      error: err => alert(err.message)
    });
  }

}

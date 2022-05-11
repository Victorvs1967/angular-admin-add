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
  isLogin: Observable<boolean> | undefined;
  isAdmin: Observable<boolean> | undefined;

 
  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [ '', [ Validators.required ] ],
      password: [ '', [ Validators.required ] ]
      // email: [ '', [ Validators.required, Validators.email ] ],
      // password: [ '', [ Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) ] ]
    });
    this.isLogin = this.auth.isLoggedIn;
    this.isAdmin = this.auth.isAdmin;

    if (this.auth.isAdmin) this.router.navigate(['admin']);
  }

  submitLogin() {
    this.auth.login(this.loginForm?.value).subscribe({
      next: () => {
        this.loginForm?.reset();
        this.router.navigate(['admin']);
      },
      error: err => alert(err.message)
    });
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  login: FormGroup = this.fb.group({
    user: ['',[Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  iniciarSesion() {
    console.log(this.login.value);
    console.log(this.login.valid);
    this.router.navigate(['/dashboard']);

  }

}
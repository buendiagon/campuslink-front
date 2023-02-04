import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hide = true;

  register: FormGroup = this.fb.group({
    user: ['',[Validators.required, Validators.minLength(3)]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    names: ['',[Validators.required, Validators.minLength(3)]],
    lastNames: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]],
    phone: ['',[Validators.required, Validators.minLength(10)]],
  });

  constructor( private fb: FormBuilder,
    private router: Router
     ) { }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  registro() {
    console.log(this.register.value);
    console.log(this.register.valid);
    this.router.navigate(['/auth/login']);
  }

}

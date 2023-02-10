import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  login: FormGroup = this.fb.group({
    username: ['HTTM',[Validators.required, Validators.minLength(3)]],
    password: ['campusLink', [Validators.required, Validators.minLength(5)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  iniciarSesion() {

    if(this.login.invalid) return;

    this.authService.login(this.login.value).subscribe( (resp: any) => {
      if(resp) {
        this.router.navigate(['/dashboard/home/initial']);
      }
      else {
        Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
      }
    });

  }

}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hide = true;

  register: FormGroup = this.fb.group({
    username: ['',[Validators.required, Validators.minLength(3)]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    names: ['',[Validators.required, Validators.minLength(3)]],
    lastNames: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]],
    phone: ['',[Validators.required, Validators.minLength(10)]],
  });

  constructor( private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
     ) { }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  registro() {
    if(this.register.invalid) return;
    this.authService.register(this.register.value).subscribe( (resp: any) => {
      if(resp) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1000
        })
        this.router.navigate(['/auth/login']);
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    });
  }

}

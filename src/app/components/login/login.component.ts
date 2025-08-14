import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Login } from '../../models/dtos/login/login';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  formularioLogin;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.formularioLogin = this.formBuilder.group({
      email: ['cris@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  get email() {
    return this.formularioLogin.controls.email
  }

  get password() {
    return this.formularioLogin.controls.password
  }

  login() {
    if(this.formularioLogin.valid) {
      this.authService.login(this.formularioLogin.value as Login).subscribe({
        next: (userData) => {
          console.log('Datos del usuario:', userData);
        },
        error: (error) => {
          console.error('Error en el inicio de sesión:', error);
        },
        complete: () => {
          this.router.navigateByUrl('/inventario');
          this.formularioLogin.reset();
        }
      });
    } else {
      this.formularioLogin.markAllAsTouched();
    }
  }
}

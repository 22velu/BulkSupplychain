// src/app/features/auth/register/register.component.ts

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule,RouterLink ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);


  isLoading = false;
  errorMsg = '';

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    role: ['buyer', Validators.required]
  });

  // submit() {
  //   if (this.form.invalid) return;

  //   this.isLoading = true;

  //   this.authService.register(this.form.value as any).subscribe({
  //     next: () => this.router.navigate(['/auth/login']),
  //     error: (err) => {
  //       this.errorMsg = err.error?.message || 'Registration failed';
  //       this.isLoading = false;
  //     }
  //   });
  // }
  submit() {
  const formData = this.form.value;

  // get existing users
  let users = JSON.parse(localStorage.getItem('users') || '[]');

  // check if user already exists
  const userExists = users.find((u: any) => u.email === formData.email);

  if (userExists) {
    alert('User already exists!');
    return;
  }

  // add new user
  users.push(formData);

  // save back to localStorage
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful!');

  // redirect to login
  this.router.navigate(['/login']);
}
}

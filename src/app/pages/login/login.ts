import { RouterLink } from '@angular/router';

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);


  isLoading = false;
  errorMsg = '';

  form = this.fb.nonNullable.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required]
});

   submit() {
  if (this.form.invalid) return;

 this.authService.login(this.form.getRawValue()).subscribe({
    next: (res) => {
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/dashboard']);
    },
    error: () => {
      this.errorMsg = 'Invalid email or password';
    }
  });
}
}

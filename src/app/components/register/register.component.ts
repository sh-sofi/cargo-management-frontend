import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService
      .register(this.username, this.email, this.password)
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: (err) =>
          (this.errorMessage = err.error.message || 'Помилка реєстрації'),
      });
  }
}

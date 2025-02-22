import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes-page',
  standalone: false,
  templateUrl: './routes-page.component.html',
  styleUrl: './routes-page.component.scss',
})
export class RoutesPageComponent {
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  isFormVisible = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}

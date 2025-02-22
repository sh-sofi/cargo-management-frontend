import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers-page',
  standalone: false,
  templateUrl: './drivers-page.component.html',
  styleUrl: './drivers-page.component.scss',
})
export class DriversPageComponent {
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

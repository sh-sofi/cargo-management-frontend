import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-works-page',
  standalone: false,
  templateUrl: './completed-works-page.component.html',
  styleUrl: './completed-works-page.component.scss',
})
export class CompletedWorksPageComponent {
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

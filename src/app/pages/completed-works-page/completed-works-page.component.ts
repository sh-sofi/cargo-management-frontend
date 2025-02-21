import { Component } from '@angular/core';

@Component({
  selector: 'app-completed-works-page',
  standalone: false,
  templateUrl: './completed-works-page.component.html',
  styleUrl: './completed-works-page.component.scss',
})
export class CompletedWorksPageComponent {
  isFormVisible = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}

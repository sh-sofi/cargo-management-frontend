import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransportService } from '../../services/transport.service';
import { Route } from '../../models/route.model';

@Component({
  selector: 'app-routes-form',
  standalone: false,
  templateUrl: './routes-form.component.html',
  styleUrl: './routes-form.component.scss',
})
export class RoutesFormComponent implements OnInit {
  workForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transportService: TransportService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.workForm = this.fb.group({
      name: ['', Validators.required],
      distance: [0, [Validators.required, Validators.min(1)]],
      daysOnRoad: [0, [Validators.required, Validators.min(1)]],
      payment: [0, [Validators.required, Validators.min(0)]],
    });
  }

  submitForm(): void {
    if (this.workForm.valid) {
      const formData: Route = {
        ...this.workForm.value,
      };

      this.transportService.addRoute(formData).subscribe(() => {
        alert('Маршрут додано успішно!');

        this.workForm.reset();
        window.location.reload();
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransportService } from '../../services/transport.service';
import { Route } from '../../models/route.model';
import { Driver } from '../../models/driver.model';
import { CompletedWork } from '../../models/completed-work.model';

@Component({
  selector: 'app-completed-works-form',
  standalone: false,
  templateUrl: './completed-works-form.component.html',
  styleUrl: './completed-works-form.component.scss',
})
export class CompletedWorksFormComponent implements OnInit {
  workForm!: FormGroup;
  routes: Route[] = [];
  drivers: Driver[] = [];

  constructor(
    private fb: FormBuilder,
    private transportService: TransportService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadRoutes();
    this.loadDrivers();
  }

  initForm(): void {
    this.workForm = this.fb.group({
      route: [null, Validators.required],
      drivers: [[], Validators.required],
      departureDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      paymentBonus: [0, [Validators.required, Validators.min(0)]],
      finalSums: [[0], [Validators.required, Validators.min(0)]],
    });
  }

  loadRoutes(): void {
    this.transportService.getRoutes().subscribe((data) => {
      console.log('Маршрути з сервера:', data);
      this.routes = data;
    });
  }

  loadDrivers(): void {
    this.transportService.getDrivers().subscribe((data) => {
      this.drivers = data;
    });
  }

  submitForm(): void {
    console.log('Перед відправленням:', this.workForm.value);

    if (this.workForm.valid) {
      console.log('Обраний маршрут:', this.workForm.value.route);

      const formData: CompletedWork = {
        ...this.workForm.value,
        route: this.workForm.value.route ? this.workForm.value.route._id : null,
        drivers: this.workForm.value.drivers.map((driver: any) => driver._id),
      };

      console.log('Фінальний об’єкт:', formData);

      this.transportService.addCompletedWork(formData).subscribe(() => {
        alert('Перевезення додано успішно!');

        this.workForm.reset();
        window.location.reload();
      });
    }
  }
}

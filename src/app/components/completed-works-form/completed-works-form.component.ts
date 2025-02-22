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
      considerExperience: [false],
      finalSums: [{ value: [0], disabled: true }, [Validators.required]],
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

  updateFinalSum(): void {
    const selectedRoute = this.workForm.value.route;
    const bonus = this.workForm.value.paymentBonus || 0;
    const considerExperience = this.workForm.value.considerExperience;
    const drivers = this.workForm.value.drivers;

    if (selectedRoute && drivers.length > 0) {
      const basePayment = (selectedRoute.payment + bonus) / drivers.length;

      let finalSums: number[] = drivers.map((driver: Driver) => {
        let adjustedPayment = basePayment;

        if (considerExperience) {
          adjustedPayment += ((basePayment * 15) / 100) * driver.experience;
        }

        return Math.round(adjustedPayment);
      });

      this.workForm.patchValue({ finalSums });
    }
  }

  submitForm(): void {
    console.log('Перед відправленням:', this.workForm.value);

    if (this.workForm.valid) {
      console.log('Обраний маршрут:', this.workForm.value.route);

      const formData: CompletedWork = {
        ...this.workForm.value,
        route: this.workForm.value.route ? this.workForm.value.route._id : null,
        drivers: this.workForm.value.drivers.map((driver: any) => driver._id),
        finalSums: this.workForm.getRawValue().finalSums,
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

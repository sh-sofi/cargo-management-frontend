import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransportService } from '../../services/transport.service';
import { Driver } from '../../models/driver.model';

@Component({
  selector: 'app-drivers-form',
  standalone: false,
  templateUrl: './drivers-form.component.html',
  styleUrl: './drivers-form.component.scss',
})
export class DriversFormComponent implements OnInit {
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
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      experience: [0, [Validators.required, Validators.min(1)]],
    });
  }

  submitForm(): void {
    if (this.workForm.valid) {
      const formData: Driver = {
        ...this.workForm.value,
      };

      this.transportService.addDriver(formData).subscribe(() => {
        alert('Водія додано успішно!');

        this.workForm.reset();
        window.location.reload();
      });
    }
  }
}

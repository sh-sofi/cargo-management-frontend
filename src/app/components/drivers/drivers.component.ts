import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { Driver } from '../../models/driver.model';
@Component({
  selector: 'app-drivers',
  standalone: false,
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss',
})
export class DriversComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private transportService: TransportService) {}

  ngOnInit(): void {
    this.transportService.getDrivers().subscribe((drivers) => {
      this.drivers = drivers;
    });
  }
}

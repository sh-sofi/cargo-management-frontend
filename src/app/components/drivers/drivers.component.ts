import { Component, OnInit, ViewChild } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { Driver } from '../../models/driver.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-drivers',
  standalone: false,
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss',
})
export class DriversComponent implements OnInit {
  displayedColumns: string[] = [
    'lastName',
    'firstName',
    'middleName',
    'experience',
  ];
  dataSource = new MatTableDataSource<Driver>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private transportService: TransportService) {}

  ngOnInit(): void {
    this.transportService.getDrivers().subscribe((drivers) => {
      this.dataSource.data = drivers;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}

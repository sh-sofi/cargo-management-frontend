import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TransportService } from '../../services/transport.service';
import { CompletedWork } from '../../models/completed-work.model';

@Component({
  selector: 'app-completed-works',
  standalone: false,
  templateUrl: './completed-works.component.html',
  styleUrls: ['./completed-works.component.scss'],
})
export class CompletedWorksComponent implements OnInit {
  displayedColumns: string[] = [
    'route',
    'drivers',
    'departureDate',
    'returnDate',
    'payment',
    'paymentBonus',
    'finalSums',
  ];
  dataSource = new MatTableDataSource<CompletedWork>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private transportService: TransportService) {}

  ngOnInit(): void {
    this.transportService.getCompletedWorks().subscribe((works) => {
      this.dataSource.data = works;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}

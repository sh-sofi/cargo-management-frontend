import { Component, OnInit, ViewChild } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { Route } from '../../models/route.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-routes',
  standalone: false,
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss',
})
export class RoutesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'distance', 'daysOnRoad', 'payment']; 
  dataSource = new MatTableDataSource<Route>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private transportService: TransportService) {}

  ngOnInit(): void {
    this.transportService.getRoutes().subscribe((routes) => {
      this.dataSource.data = routes;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}

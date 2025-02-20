import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { Route } from '../../models/route.model';

@Component({
  selector: 'app-routes',
  standalone: false,
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss',
})
export class RoutesComponent implements OnInit {
  routes: Route[] = [];

  constructor(private transportService: TransportService) {}

  ngOnInit(): void {
    this.transportService.getRoutes().subscribe((routes) => {
      this.routes = routes;
    });
  }
}

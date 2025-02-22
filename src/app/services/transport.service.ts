import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from '../models/route.model';
import { Driver } from '../models/driver.model';
import { CompletedWork } from '../models/completed-work.model';

@Injectable({
  providedIn: 'root',
})
export class TransportService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>(`${this.apiUrl}/routes`);
  }

  addRoute(route: Route): Observable<Route> {
    return this.http.post<Route>(`${this.apiUrl}/routes`, route);
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.apiUrl}/drivers`);
  }

  addDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(`${this.apiUrl}/drivers`, driver);
  }

  getCompletedWorks(): Observable<CompletedWork[]> {
    return this.http.get<CompletedWork[]>(`${this.apiUrl}/completedworks`);
  }

  addCompletedWork(work: CompletedWork): Observable<CompletedWork> {
    return this.http.post<CompletedWork>(`${this.apiUrl}/completedworks`, work);
  }
}

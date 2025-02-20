import { Route } from './route.model';
import { Driver } from './driver.model';

export interface CompletedWork {
  id?: string;
  route: Route | null;
  drivers: Driver[];
  departureDate: string;
  returnDate: string;
  paymentBonus: number;
  finalSums: number[];
}

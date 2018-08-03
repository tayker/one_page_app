import { Injectable } from '@angular/core';
import { RentService} from './services/rent.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private rentService: RentService) {}

  getRentList(currentRange, range) {
    return this.rentService.getRentList(currentRange, range);
  }
  getCurrentRent(id) {
    return this.rentService.getCurrentRent(id);
  }
}

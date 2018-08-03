import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.scss']
})
export class RentListComponent implements OnInit {

  list = [];
  range: number = 3;
  currentRange: number = 0;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.list = this.dataService.getRentList(this.currentRange, this.range);
  }
  onScroll() {
    this.currentRange += 3;
    this.range += 3;
    this.list = this.list.concat(this.dataService.getRentList(this.currentRange, this.range));
  }
}

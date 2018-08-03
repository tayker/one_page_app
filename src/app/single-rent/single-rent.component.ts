import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataService} from '../data.service';

@Component({
  selector: 'app-single-rent',
  templateUrl: './single-rent.component.html',
  styleUrls: ['./single-rent.component.scss']
})
export class SingleRentComponent implements OnInit {

  item;
  private id: any;
  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getCurrentRent(this.id);
  }

  getCurrentRent(id) {
    this.item = this.dataService.getCurrentRent(id);
  }
}

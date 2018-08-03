import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rent-list-item',
  templateUrl: './rent-list-item.component.html',
  styleUrls: ['./rent-list-item.component.scss']
})
export class RentListItemComponent implements OnInit {

  @Input() item;
  @Input() i;
  config: SwiperOptions = {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };
  constructor() { }

  ngOnInit() {
  }

}

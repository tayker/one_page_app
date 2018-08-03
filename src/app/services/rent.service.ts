import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  rentList = [
    {title: 'super hata1', imgs: ['1.jpg', '2.jpg', '3.jpg'], address: 'Poltava', description: 'SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr ', mapKey: '', date: ''},
    {title: 'super hata2', imgs: ['4.jpg', '5.jpg', '6.jpg', '7.jpg'], address: 'Poltava', description: 'SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr ', mapKey: '', date: ''},
    {title: 'super hata3', imgs: ['8.jpg', '9.jpg', '10.jpg'], address: 'Poltava', description: 'SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr ', mapKey: '', date: ''},
    {title: 'super hata4', imgs: ['1.jpg', '2.jpg', '3.jpg'], address: 'Poltava', description: 'SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr ', mapKey: '', date: ''},
    {title: 'super hata5', imgs: ['4.jpg', '5.jpg', '6.jpg', '7.jpg'], address: 'Poltava', description: 'SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr ', mapKey: '', date: ''},
    {title: 'super hata5', imgs: ['8.jpg', '9.jpg', '10.jpg'], address: 'Poltava', description: 'SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr ', mapKey: '', date: ''},
    {title: 'super hata6', imgs: ['1.jpg', '2.jpg', '3.jpg'], address: 'Poltava', description: 'SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr ', mapKey: '', date: ''},
    {title: 'super hata7', imgs: ['4.jpg', '5.jpg', '6.jpg', '7.jpg'], address: 'Poltava', description: 'SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr ', mapKey: '', date: ''},
    {title: 'super hata8', imgs: ['8.jpg', '9.jpg', '10.jpg'], address: 'Poltava', description: 'SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr SOme descr ', mapKey: '', date: ''}
  ];
  constructor() { }

  getRentList(currentRange, range) {
    return this.rentList.slice(currentRange, range);
  }
  getCurrentRent(id) {
    return this.rentList[id];
  }
}

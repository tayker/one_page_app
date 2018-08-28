import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isActive: boolean = false;
  constructor(private router: Router) { }

  toggleVisibility(){
    this.isActive = !this.isActive;
  }
  checkRouter(val){
    return this.router.url === val;
  }
  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { transformTopAnimation} from '../../animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [transformTopAnimation]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

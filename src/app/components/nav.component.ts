import { Component , Input , Output, EventEmitter } from '@angular/core';
import {User} from '../class/User';


@Component({
  selector: 'app-nav',
  templateUrl: '../views/nav.component.html',
  styleUrls: [ '../styles/nav.component.css' ]
})
export class NavComponent {
  title = 'app';

  @Input()
  private user: User;

  constructor(){
    // console.log(this.user);


  }

}

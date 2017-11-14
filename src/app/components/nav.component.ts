import { Component , Input , Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';

import { User } from '../class/User';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-nav',
  templateUrl: '../views/nav.component.html',
  styleUrls: [ '../styles/nav.component.css' ]
})

export class NavComponent {
  title = 'app';

  
  private user: User;

  constructor( private userservice: UserService, private router: Router ){
    // console.log(this.user);
    this.user = this.userservice.getCurentUser();

  }


  logout():void{

    this.userservice.setCurentUser( new User( "", "", "", "") );
    this.router.navigate(['/']);
  }

}

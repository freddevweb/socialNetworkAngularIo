import { Component, Input, Output } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../class/User";




@Component({
  selector: 'app-home',
  templateUrl: '../views/home.component.html',
  styleUrls: ['../styles/home.component.css'],
  providers: []
})

export class HomeComponent {

  public displayFormLog = false;
  public displayFormSign = false;
  public user: User;
  

  constructor( private userservice: UserService ){

    this.user = this.userservice.getCurentUser();
  }


	
}
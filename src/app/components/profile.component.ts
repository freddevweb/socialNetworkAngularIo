import { Component } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
	selector: 'app-profile',
	templateUrl: '../views/profile.component.html',
	styleUrls: ['../styles/profile.component.css'],
	providers: [UserService],
})

export class ProfileComponent { 
	
}
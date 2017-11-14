import {slideInDownAnimation} from '../animations/animations';
import { Component, HostBinding } from '@angular/core';
import { UserService } from '../services/user.service';






@Component({
	selector: 'app-signin',
	templateUrl: '../views/signin.component.html',
	styleUrls: ['../styles/signin.component.css'],
	providers: [],
	animations: [slideInDownAnimation]
})

export class SigninComponent { 


	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

	constructor(){

	}
	
}
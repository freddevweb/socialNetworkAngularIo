import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../class/User';


@Component({
	selector: 'app-profile',
	templateUrl: '../views/profile.component.html',
	styleUrls: ['../styles/profile.component.css'],
	providers: [],
})

export class ProfileComponent { 
	

	public user: User;

	public displayFormPseudo: boolean = false;
	public displayFormEmail: boolean = false;
	public displayFormPass: boolean = false;
	// recup les elements des forms pour valider
	public contents: {

	} = [];


	constructor( private userservice : UserService){
		this.user = this.userservice.getCurentUser();
		console.log(this.user);
	}
	
	form( subject ):void {
		subject = !subject;
		console.log(subject);
	}
	
	displayForm( val ): void{

    	if( val === 'Pseudo'){
			this.displayFormPseudo = !this.displayFormPseudo;
			this.displayFormEmail = false;
			this.displayFormPass = false;
    	}
		if( val === 'Email'){
			this.displayFormPseudo = false;
			this.displayFormPass = false;
			this.displayFormEmail = !this.displayFormEmail;
		}
		if( val === 'Pass'){
			this.displayFormPseudo = false;
			this.displayFormEmail = false;
			this.displayFormPass = !this.displayFormPass;
		}
		
	}






}
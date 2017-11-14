import { Component } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../class/User";
import { Router } from "@angular/router";






@Component({
  selector: 'app-home',
  templateUrl: '../views/connection.component.html',
  styleUrls: ['../styles/connection.component.css'],
  providers: []
})

export class ConnectionComponent {
	

	
	public displayFormLog = false;
  	public displayFormSign = false;
	public user: User;

	constructor(  private userservice: UserService , private router: Router ){
		this.userservice.fortest();
	}


	displayForm( val ): void{

    	if( val === 'Log'){
			this.displayFormSign = false;
			this.displayFormLog = true;
    	}
		if( val === 'Sign'){

			this.displayFormLog = false;
			this.displayFormSign = true;
		}
	}

	signin( prenom , nom , pseudo , email , pass ):void {

		// const newUser: User = new User ( prenom , nom , pseudo , email , pass );
		
    // this.userservice.signinUser( newUser ).then( (data)=>{
    //   console.log(data.json());
      // 
      // sin is ok 
      // connectez vous
    // })

	}

	login( value , pass ): void{

		this.userservice.loginUser( value , pass ).then( (data)=>{

			if( data.json().success == true ){
				let tempUser = data.json().user;
				console.log(tempUser);
				let newUser = new User ( tempUser.prenom, tempUser.nom, tempUser.pseudo, tempUser.email );
				newUser.setId(tempUser.id);
				newUser.setPublicationLike( tempUser.publicationLike );
				this.user = newUser;
				this.userservice.setCurentUser( newUser );
				this.gotoHome();
			}
		})
 	}


	gotoHome() {
		this.router.navigate(['/home']);
	}
  

}

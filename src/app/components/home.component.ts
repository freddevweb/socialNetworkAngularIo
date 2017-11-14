import { Component, Input, Output } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../class/User";




@Component({
  selector: 'app-home',
  templateUrl: '../views/home.component.html',
  styleUrls: ['../styles/home.component.css'],
  providers: [UserService]
})

export class HomeComponent {

  public displayFormLog = false;
  public displayFormSign = false;
  public user: User;
  

  constructor( private userservice: UserService ){
      // testing
      this.fortest();
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

      }
    })
  }
  
  fortest():void {

    let newUser = new User( "Fred", "MAS", "Fred", "fred@mail.com" );
    newUser.setId(1);
    newUser.setPublicationLike( [1,2] );
    this.user = newUser;
  }
	
}
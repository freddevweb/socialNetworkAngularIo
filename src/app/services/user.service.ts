
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { User } from '../class/User';
import * as md5 from "md5";

import 'rxjs/add/operator/toPromise';


@Injectable() // ce service pourra s'injecter dans un constructeur
export class UserService {

	private curentUser : User;
	

	private url: string = "http://localhost/angularJS/SocialNetwork/api/user";

	constructor( private http: Http ){
		this.fortest();
	}

	
	loginUser( value:string, pass:string ): Promise<any> {

		return this.http.get(  this .url + "/" + value + "/" + md5(pass) ).toPromise();
	}


	signinUser( user: User ): Promise<any> {
		
		const body: {} = {
                prenom :  user.getPrenom(),
                nom : user.getNom(),
				pseudo : user.getPseudo(),
				email : user.getEmail(),
				pass : md5(user.getPass()),
		} ;
			

		return this.http.post( this.url , body).toPromise();
	}


	like( userId: number , postId: number ,  aimType: number ): Promise<any> {

		const url = "http://localhost/angularJS/SocialNetwork/api/like" + "/" + userId + "/" + postId + "/" + aimType; 
			
		
		console.log(url );
		return this.http.put( url, {}  ).toPromise();
	}

	createComment( postid, userId, comment ):Promise<any>{

		const url = "http://localhost/angularJS/SocialNetwork/api/comment";
		const body = {
			postId : postid,
			userId : userId,
			comment : comment
		}

		return this.http.post( url , body ).toPromise();
	}

	getUser( userId ): Promise<any>{

		return this.http.get( this.url + "/" + userId ).toPromise();
	}

	getCurentUser( ){
		return this.curentUser;
	}
	setCurentUser( curentUser ){
		this.curentUser = curentUser;
	}
	
	

	fortest() {

		let newUser = new User( "Fred", "MAS", "Fred", "fred@mail.com" );
		newUser.setId(1);
		newUser.setPublicationLike( [1,2] );
		this.setCurentUser( newUser );
		
	}



}
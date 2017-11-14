
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Post } from "../class/Post";

import 'rxjs/add/operator/toPromise';


@Injectable() // ce service pourra s'injecter dans un constructeur
export class PostService {
	

	private url: string = "http://localhost/angularJS/SocialNetwork/api/actual";

	constructor( private http: Http){

	}

	
	getPosts(): Promise<any> {

		return this.http.get( this.url + "s" ).toPromise();

	}

	getPost( id ): Promise<any> {

		return this.http.get( this.url + "/" + id ).toPromise();

	}


	createPost( post: Post ): Promise<any> {
		
		const body: {} = {
			userId :  post.getUserId(),
			texte : post.getTexte()
		};
			
		return this.http.post( this.url , body).toPromise();
	}

	deletePost( id: number ): Promise<any> {

		return this.http.get( this.url + "/" + id ).toPromise();
	}
	
	


}
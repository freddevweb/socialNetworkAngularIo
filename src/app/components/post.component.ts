import {UserService} from '../services/user.service';
import {Post} from '../class/Post';
import {User} from '../class/User';
import {slideInDownAnimation} from '../animations/animations';
import { Component, Input, Output, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';





@Component({
	selector: 'app-post',
	templateUrl: '../views/post.component.html',
	styleUrls: ['../styles/post.component.css'],
	providers: [PostService, UserService],
	animations: [slideInDownAnimation]
})

export class PostComponent implements OnInit { 
	


	@Input()
	private user: User;
	@Input()
	private post: Post;

	private comment: string = '';
	
	private postUserLike: boolean = false;

	private thisroute: string[];


	constructor( private userservice: UserService, private postservice: PostService){

		
	}

	ngOnInit(): void {
		this.setPostUserLike();
		console.log(this.comment)
		console.log(this.post);
		
	}



	like(): void{

		this.userservice.like( this.user.getId(), this.post.getId(), 1 ).then( (data)=>{
			console.log(data);

			if( data.json().success == true && data.json().action == "create" ){
				this.postUserLike = true;

			}
			if( data.json().success == true && data.json().action == "delete"){
				this.postUserLike = false;
			}
		});

	}

	addComment( event ): void{

		if( event.key == "Enter" ){
			console.log("enter");
			// this.userservice.createComment( this.comment )
		}
		console.log(this.comment);
		console.log(event);
	}

	setPostUserLike(): void{

		if( this.user.getPublicationLike().indexOf( this.post.getId() ) > -1 ){
			this.postUserLike = true;
		}
	}


	fortest():void {

		let newUser = new User( "Fred", "MAS", "Fred", "fred@mail.com" );
		newUser.setId(1);
		newUser.setPublicationLike( [1,2] );
		this.user = newUser;
	}

	
}
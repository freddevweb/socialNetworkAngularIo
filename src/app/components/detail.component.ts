
import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {slideInDownAnimation} from '../animations/animations';


import {PostService} from '../services/post.service';
import {UserService} from '../services/user.service';

import {User} from '../class/User';
import {Post} from '../class/Post';
import {Comment} from '../class/Comment';




@Component({
	selector: 'app-detail',
	templateUrl: '../views/detail.component.html',
	styleUrls: ['../styles/detail.component.css'],
	providers: [PostService, UserService ],
	animations: [slideInDownAnimation]
})

export class DetailComponent {
	
	// recuperer l id de la route
	@Input()
	private user: User;
	@Input()
	private post: Post;
	
	private commentsAll: Comment[];

	// private comment: number = 0;

	private arrayUserIdLike: number[];

	constructor( private route: ActivatedRoute, private postservice: PostService, private userservice: UserService ){
		
		const id: number = parseInt( this.route.snapshot.paramMap.get( 'id' ), 10 );
		this.getPostAndComments(id);
		this.fortest();
	}

	getPostAndComments( id ){
		
		this.postservice.getPost( id ).then( (data)=>{
			let result = data.json()[0];

			// create post
			let newPost : Post = new Post( result.userId, result.texte );
			newPost.setPublication( result.publication );
			let object: { [key:string]: any } = {
				comment : result.array["comment"].length,
				like : result.array["like"].length,
				user : result.array["user"]
			};
			newPost.setArray( object );
			this.post = newPost;

			console.log(this.post);
			let arraycompo : Comment[];
			for(let comment of result.array["comment"]){
				let newComment: Comment = new Comment( comment.postId, comment.userId,  comment.comment  );
				newComment.setCdate( comment.cdate );
				newComment.setId( comment.id );
				console.log(newComment);
				console.log(arraycompo);
				arraycompo.push(newComment);
				
			}
			
			// console.log(usersId)
			// this.userservice.getUser( usersId ).then( (data)=>{
			// 	console.log(data);
			// 	this.user = data.json();
			// });
			// console.log(this.user);

			// for(let id of result.array["like"] ){
			// 	console.log(id);

			// }
			
			// console.log(this.comments);
			
			
		})
	}



	fortest():void {

		let newUser = new User( "Fred", "MAS", "Fred", "fred@mail.com" );
		newUser.setId(1);
		newUser.setPublicationLike( [1,2] );
		this.user = newUser;
	}







}
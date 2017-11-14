
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
	providers: [PostService ],
	animations: [slideInDownAnimation]
})

export class DetailComponent implements OnInit {
	
	private user: User;
	
	private post: Post;
	
	private comments: Comment[] = [];

	// private comment: number = 0;

	private arrayUserIdLike: number[];

	constructor( private route: ActivatedRoute, private postservice: PostService, private userservice: UserService ){
		
		// const id: number = parseInt( this.route.snapshot.paramMap.get( 'id' ), 10 );
		// this.getPostAndComments(id);

		// this.user = this.userservice.getCurentUser();
	}

	ngOnInit(): void {
		const id: number = parseInt( this.route.snapshot.paramMap.get( 'id' ), 10 );
		this.getPostAndComments(id);
		this.user = this.userservice.getCurentUser();
	}

	getPostAndComments( id ){
		
		this.comments = [];

		this.postservice.getPost( id ).then( (data)=>{
			let result = data.json()[0];

			// create post
			let newPost : Post = new Post( result.userId, result.texte );
			newPost.setId( result.id );
			newPost.setPublication( result.publication );
			let object: { [key:string]: any } = {
				comment : result.array["comment"].length,
				like : result.array["like"].length,
				user : result.array["user"]
			};
			
			newPost.setArray( object );
			this.post = newPost;

			let usersId: number[] = [];

			for(let comment of result.array["comment"]){

				let newComment: Comment = new Comment( comment.postId, comment.userId,  comment.comment  );
				newComment.setCdate( new Date( comment.cdate )  );
				newComment.setId( comment.id );
				newComment.setPseudo( comment.pseudo );

				this.comments.push(newComment);
				
			}
			console.log(this.comments);

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








}
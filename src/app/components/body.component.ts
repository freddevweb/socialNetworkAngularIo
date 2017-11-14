import {UserService} from '../services/user.service';
import {Post} from '../class/Post';
import {PostService} from '../services/post.service';
import { Component, Input, Output, OnInit } from "@angular/core";
import { User } from '../class/User';




@Component({
  selector: 'app-body',
  templateUrl: '../views/body.component.html',
  styleUrls: ['../styles/body.component.css'],
  providers: [PostService, UserService]
})

export class BodyComponent implements OnInit{

	private posts: Post[]= [];

	@Input()
	private user: User;



	constructor( private postservice: PostService, private userservice: UserService){

		this.getPosts();
		
	}

	
	ngOnInit(): void {
		// console.log(this.user);
	}

	getPosts(): void{

		this.postservice.getPosts().then( (data)=>{
			
			for( let dataPost of data.json() ){
				console.log(dataPost);
				const newPost : Post = new Post( dataPost.userId , dataPost.texte );
				newPost.setId( dataPost.id);
				newPost.setPublication( dataPost.publication );
				newPost.setArray( dataPost.array );
				
				this.posts.push( newPost );
			}
		})

	}

	addPost():void {

	}
}
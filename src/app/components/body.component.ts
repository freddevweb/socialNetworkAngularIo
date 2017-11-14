import {UserService} from '../services/user.service';
import {Post} from '../class/Post';
import {PostService} from '../services/post.service';
import { Component, Input, Output, OnInit } from "@angular/core";
import { User } from '../class/User';




@Component({
  selector: 'app-body',
  templateUrl: '../views/body.component.html',
  styleUrls: ['../styles/body.component.css'],
  providers: [PostService]
})

export class BodyComponent implements OnInit{

	private posts: Post[]= [];

	private user: User;

	private page: boolean = true;


	constructor( private postservice: PostService, private userservice: UserService){

		this.getPosts();
		this.user = this.userservice.getCurentUser();
		
	}

	
	ngOnInit(): void {
		// console.log(this.user);
	}

	getPosts(): void{
		this.posts = [];
		this.postservice.getPosts().then( (data)=>{
			
			for( let dataPost of data.json() ){
				
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
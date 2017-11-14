import {UserService} from '../services/user.service';
import {Post} from '../class/Post';
import {User} from '../class/User';
import {slideInDownAnimation} from '../animations/animations';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { PostService } from '../services/post.service';






@Component({
	selector: 'app-post',
	templateUrl: '../views/post.component.html',
	styleUrls: ['../styles/post.component.css'],
	providers: [PostService],
	animations: [slideInDownAnimation]
})

export class PostComponent implements OnInit { 
	

	private user: User;
	@Input()
	private post: Post;
	@Input()
	private page:boolean; // gere l'affichage du lien des commmentaires

	private comment: string = '';
	
	private postUserLike: boolean = false;

	private thisroute: string[];

	private likeNumber: number;

	@Output()
  	public event: EventEmitter<number> = new EventEmitter<number>();

	constructor( private userservice: UserService, private postservice: PostService){

		this.user = this.userservice.getCurentUser();
		
	}

	ngOnInit(): void {
		this.user = this.userservice.getCurentUser();
		this.setPostUserLike();
		this.likeNumber = this.post.getArray().like;
	}



	like(): void{

		this.userservice.like( this.user.getId(), this.post.getId(), 1 ).then( (data)=>{

			if( data.json().success == true && data.json().action == "create" ){
				this.postUserLike = true;
				this.likeNumber ++;
			}
			if( data.json().success == true && data.json().action == "delete"){
				this.postUserLike = false;
				this.likeNumber --;
			}
			// this.parentGetPosts();
		});

	}

	addComment( event ): void{

		if( event.key == "Enter" ){
		
			this.userservice.createComment( this.post.getId(),  this.user.getId(), this.comment );
			this.parentGetPostAndComments();
			this.comment = '';
		}
		
	}

	setPostUserLike(): void{

		if( this.user.getPublicationLike().indexOf( this.post.getId() ) > -1 ){

			this.postUserLike = true;
		}
	}

	parentGetPostAndComments(){
		this.event.emit( this.post.getId() );
	}
	
}
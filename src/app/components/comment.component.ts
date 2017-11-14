import {slideInDownAnimation} from '../animations/animations';
import {Component, OnInit, Input, Output } from '@angular/core';
import { Post } from '../class/Post';




@Component({
	selector: 'app-comment',
	templateUrl: '../views/comment.component.html',
	styleUrls: ['../styles/comment.component.css'],
	providers: [],
	animations: [slideInDownAnimation]
})

export class CommentComponent {

	@Input()
	private comment: Comment;

	constructor(){
		
	}

	

	

}
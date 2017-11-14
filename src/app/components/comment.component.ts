import {Input} from '@angular/core';
import {slideInDownAnimation} from '../animations/animations';
import {Component, OnInit} from '@angular/core';
import { Post } from '../class/Post';




@Component({
	selector: 'app-comment',
	templateUrl: '../views/detail.component.html',
	styleUrls: ['../styles/detail.component.css'],
	providers: [],
	animations: [slideInDownAnimation]
})

export class CommentComponent {

	@Input()
	private post: Post;

	constructor(){
		
	}

	ngOnInit(): void {
		
	}

	

}
import { NoteService } from '../services/notes.service';

import { Component, HostBinding } from "@angular/core";
import { Note } from "../class/Note";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation } from '../animations/animations';



@Component({
	selector: 'app-detail',
	template: `
		<div *ngIf="note">
			<h2 > {{ note.getTitle() }} </h2>
			<p> {{ note.getContent() }} </p>
			<h6 class="date" ><i> {{note.getDate() | date:'dd-MM-yyyy'}} </i></h6>
		</div>
	`,
	styleUrls: ['../styles/detail.component.css'],
	providers: [NoteService],
	animations: [slideInDownAnimation]
})

export class DetailComponent {

		@HostBinding('@routeAnimation') routeAnimation = true;
		@HostBinding('style.display')   display = 'block';
		@HostBinding('style.position')  position = 'absolute';

	public note: Note;


	constructor( private route: ActivatedRoute, private service: NoteService ){

		const id: number = parseInt( this.route.snapshot.paramMap.get( 'id' ), 10 );
		this.getNote( id );

	}

	
	getNote( id: number ){

		this.service.getAllNotes().then( ( data) =>{

			for ( var note of data.json() ){

				if( note.id === id ){
					this.note = new Note( note.id , note.title, note.content, new Date( note.date) );
				}


			}

		} )

	}

	
}
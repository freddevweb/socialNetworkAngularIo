import {Note} from '../class/Note';
import { Component } from '@angular/core';
import { NoteService } from '../services/notes.service';
import { Color } from '../class/Color';


@Component({
  selector: 'app-notes',
  templateUrl: '../views/notes.component.html',
  styleUrls: ['../styles/notes.component.css'],
  providers: [NoteService] // on défini la liste des services a injecter dans le constructeur
})

export class NotesComponent {

	public displayForm = false;
	public selected_note :Note;

	public displayedNote: Note[];
	public search: string= '';

	
	public color: Color = new Color();

	public newNote:Note = new Note( 0 ,'' , '', new Date()  );

	public notes : Note[] = [];

	constructor( private noteservice: NoteService ){ // se servire du service

		this.getNotes();
		
	}
	
	getNotes(){
		this.noteservice.getAllNotes().then( (data)=>{
			
			for( var note of data.json() ){
				
				this.notes.push( new Note( note.id, note.title , note.content , new Date( note.date ) ) );

			}
			// this.displayedNote = this.notes; // enable for search initial
		})
	}

	addAddNote( title: string, content:string ){
		
		
		this.notes.push( new Note( 0 , title , content , new Date() ) );
		this.displayForm = false;

	}


	addNote(){
		console.log(this.notes.length);
		const note: Note = new Note( this.newNote.getId(), this.newNote.getTitle() , this.newNote.getContent(),  new Date()  );
		this.notes.push( note );
		this.newNote = new Note( 0, '' , '', new Date()  ); // remet new note a 0
		this.displayForm = false;
		// this.filter();
  	}

	deleteNote( i: number ){

		this.notes.splice( i , 1 );

	}



	// filter(): Note[] {
	// 	const displayedNote: Note[] = [];
	// 	for( let note of this.notes ){
	// 		// console.log(note);
	// 		if( note.getTitle().toLocaleLowerCase().indexOf( this.search.toLocaleLowerCase() ) > -1 
	// 			|| note.getContent().toLocaleLowerCase().indexOf( this.search.toLocaleLowerCase() ) > -1 ){
	// 			displayedNote.push( note );

	// 		}
			
	// 	}

		// // fonction de tri mais la suppression ne fonctionne pas dans l'ordre
		// function compare( a , b ) {
		// if (a.getTitle() < b.getTitle() )
		// 	return -1;
		// if (a.getTitle() > b.getTitle())
		// 	return 1;
		// return 0;
		// }

		// return displayedNote.sort(compare);

	// 	return displayedNote;
	// }


	// filter a l'origine
	// filter() {
	// 	this.displayedNote = [];
	// 	for( let note of this.notes ){
	// 		// console.log(note);
	// 		if( note.getTitle().indexOf(this.search) > -1 || note.getContent().indexOf(this.search) > -1 ){
	// 			this.displayedNote.push(note);
	// 		}
			
	// 	}

	// }




}

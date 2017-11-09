import { Note } from "../class/Note";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import 'rxjs/add/operator/toPromise';

@Injectable() // ce service pourra s'injecter dans un constructeur
export class NoteService {

	private url: string = "http://localhost/angularJS/api/index.php";

	constructor( private http: Http){

	}


	/* 
	getNotes(): Promise<Note[]> {

		
		// avec ajax (necessite l'installation de jquery)
		return new Promise((resolve, reject)=>{
			$.ajax({
				url:'angularJS/api/fakeapi.php',
				dataType: 'json',
				success: (data )=>{
					const notes: Note[] = [];
					for( const dnote of data ){
						note.setDate( new Date(dnote.date));
						const note: Note = new Note( dnote.title, dnote.content, dnote.date );
						
					}
				},
				error: (error )=> {
					console.log(error);
				}
			})
		});
		 
	}*/



	getAllNotes(): Promise<any> {

		return this.http.get(this.url).toPromise();
		
	}

	


}
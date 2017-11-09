import {Note} from '../class/Note';
import { Pipe , PipeTransform } from '@angular/core';



@Pipe({name: 'filter' })
export class FilterPipe implements PipeTransform {
	
	transform( notes: Note[] , search: string ) {

		if( search == '') {
			return notes;
		}
		const displayedNote: Note[] = [];
		for( let note of notes ){
			// console.log(note);
			if( note.getTitle().toLocaleLowerCase().indexOf( search.toLocaleLowerCase() ) > -1 
				|| note.getContent().toLocaleLowerCase().indexOf( search.toLocaleLowerCase() ) > -1 ){
				displayedNote.push( note );
				
			}
			
		}

		return displayedNote;
	}
}
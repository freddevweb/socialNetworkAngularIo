import {Note} from '../class/Note';
import { Pipe , PipeTransform } from '@angular/core';



@Pipe({name: 'resume' })
export class ResumePipe implements PipeTransform {
	
	transform( note: Note ) {
		const resum_title: string = note.getTitle().substr( 0 , 3 );
		const resum_content: string = note.getContent().substr( 0 , 3 );
		
		return resum_title + " " + resum_content; 
	}
}
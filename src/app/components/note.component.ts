import { Component , Input , Output, EventEmitter } from '@angular/core';
import { Note } from '../class/Note';
import { Color } from '../class/Color';



@Component({
  selector: 'app-note',
  templateUrl: '../views/note.component.html',
  styleUrls: ['../styles/note.component.css']
})

export class NoteComponent {

  @Input() // (décorateur de variable) on demande a cette variable d'etre une entrée dans le selecteur
  public note: Note;
  
  @Input()
  public index: number;

  @Output()
  public event: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public color: Color;

  

  parentRemoveNote(){

    this.event.emit( this.index );
  }

}
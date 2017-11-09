
import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive( {
	selector: '[appHighlight]'
})

export class HighlightDirectives  { //"implements OnInit" oninit va attendre que tout le rendu de l'élément soit terminé

	private element: HTMLElement;


	@Input('appHighlight') highlightcolor: string;

	constructor( el: ElementRef,  ){

		this.element = el.nativeElement;
		
	}

	@HostListener('mouseenter') onmouseenter(){
		this.element.style.backgroundColor = this.highlightcolor;
	}
	@HostListener('mouseleave') onmouseleave(){
		this.element.style.backgroundColor = null;
	}

	// ngOnInit(): void { // ce qui va etre exécuté quand le rendu de l'élément est terminé

	// 	this.element.style.color = this.highlightcolor;
		
	// }

}
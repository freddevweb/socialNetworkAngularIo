
export class Note {

	private id: number;
	private title:string;
	private content:string;
	private date: Date;
	
	static lastId: number = 0;

	constructor( id:number, title: string, content: string, date: Date ){

		if( id === 0 ){
			id= Note.lastId + 1;
		}

		this.id = id;
		this.title = title;
		this.content = content;
		this.date = date;
		

	}

	getId(){
		return this.id;
	}
	getTitle(){
		return this.title;
	}

	getContent(){
		return this.content;
	}

	getDate(){
		return this.date;
	}
	setDate( date ){
		this.date = date;
	}
}
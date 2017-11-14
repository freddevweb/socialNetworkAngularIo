
export class Post {

	private id: number;
	private userId:string;
	private texte:string;
	private publication: Date;
	private array: {
		user: string,
		like: number,
		comment: number
	};

	constructor( userId: string, texte: string ){

		this.userId = userId;
		this.texte = texte;
	}

	// @id
	getId(){
		return this.id;
	}
	setId( id ){
		this.id = id;
	}

	// @userId
	getUserId(){
		return this.userId;
	}
	setUserId( userId ){
		this.userId = userId;
	}

	// @texte
	getTexte(){
		return this.texte;
	}
	setTexte( texte ){
		this.texte = texte;
	}

	// @publication
	getPublication(){
		return this.publication;
	}
	setPublication( publication ){
		this.publication = publication;
	}

	// @array
	getArray(){
		return this.array;
	}
	setArray( array ){
		this.array = array;
	}
}
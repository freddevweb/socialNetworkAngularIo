
export class User {
	

	private id: number;
	private prenom:string;
	private nom:string;
	private pseudo:string;
	private pass: string;
	private email: string;
	private photo_path:string;
	private inscription: Date;
	private publicationLike: number[];

	constructor( prenom: string, nom: string, pseudo:string, email:string){

		this.prenom = prenom;
		this.nom = nom;
		this.pseudo = pseudo;
		this.email = email;
	}

	// @id
	getId(){
		return this.id;
	}
	setId( id ){
		this.id = id;
	}

	// @prenom
	getPrenom(){
		return this.prenom;
	}
	setPrenom( prenom ){
		this.prenom = prenom;
	}

	// @nom
	getNom(){
		return this.nom;
	}
	setNom( nom ){
		this.nom = nom;
	}

	// @pseudo
	getPseudo(){
		return this.pseudo;
	}
	setPseudo( pseudo ){
		this.pseudo = pseudo;
	}

	// @pass
	getPass(){
		return this.pass;
	}
	setPass( pass ){
		this.pass = pass;
	}

	// @email
	getEmail(){
		return this.email;
	}
	setEmail( email ){
		this.email = email;
	}

	// @photo_path
	getPhoto_path(){
		return this.photo_path;
	}
	setPhoto_path( photo_path ){
		this.photo_path = photo_path;
	}

	// @inscription
	getInscription(){
		return this.inscription;
	}
	setInscription( inscription ){
		this.inscription = inscription;
	}

	// @publicationLike
	getPublicationLike(){
		return this.publicationLike;
	}
	setPublicationLike( publicationLike ){
		this.publicationLike = publicationLike;
	}

}
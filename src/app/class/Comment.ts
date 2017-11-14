
export class Comment {

	private id: number;
	private postId:number;
	private userId:number;
	private comment: string;
	private cdate: Date;
	
	static lastId: number = 0;

	constructor( postId: number, userId: number, comment: string ){

		this.postId = postId;
		this.userId = userId;
		this.comment = comment;
	}

	// @id
	getId(){
		return this.id;
	}
	setId( id ){
		this.id = id;
	}

	// @postId
	getPostId(){
		return this.postId;
	}
	setPostId( postId ){
		this.postId = postId;
	}

	// @userId
	getUserId(){
		return this.userId;
	}
	setUserId( userId ){
		this.userId = userId;
	}

	// @cdate
	getCdate(){
		return this.cdate;
	}
	setCdate( cdate ){
		this.cdate = cdate;
	}
}
export class Comment {
	_id: number;
	posts: number;
	user: User;
	text: string;
	date: string;

	constructor(obj? :any){
		this._id = obj && obj._id || null;
		this.posts = obj && obj.posts || null;
		this.user = obj && new User(obj.user) || null;
		this.text = obj && obj.text || null;
		this.date = obj && obj.date || null;
	}
}

class User {
	name: string;
	picture: string;

	constructor(obj? :any){
		this.name = obj && obj.name || null;
		this.picture = obj && obj.picture || null;
	}
}
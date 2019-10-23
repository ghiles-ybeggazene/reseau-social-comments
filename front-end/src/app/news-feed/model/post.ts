export class Post {
	_id: number;
	text: string;
	user: User;
	date: string;

	constructor(obj? :any){
		this._id = obj && obj._id || null;
		this.text = obj && obj.text || null;
		this.user = obj && new User(obj.user) || null;
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
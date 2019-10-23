import { Post } from './post';

export class PostList {
	posts: Post[];

	constructor(obj? :any){
		this.posts = obj && obj.posts.map(res => new Post(res)) || [];
	}
}
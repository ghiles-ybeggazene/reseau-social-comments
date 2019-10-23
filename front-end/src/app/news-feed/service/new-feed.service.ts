import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { PostList } from '../model/postList';
import { Comment } from '../model/comment';

const baseUrl = "http://localhost:3000/api/posts";

@Injectable()
export class NewFeedService {

  constructor(private http: HttpClient) { }

  getPosts(params? :any):Observable<PostList>{
  	let queryParams = {};
		if(params){
			queryParams = {
				params : new HttpParams()
				.set("sort", params.sort || "")
        .set("sortDirection", params.sortDirection || "")
        .set("page", params.page && params.page.toString() || "")
        .set("pageSize", params.page && params.pageSize.toString() || "")
      }
    }
  	return this.http.get(baseUrl, queryParams).map(res => new PostList(res));
  }

  getComments(id){
    return this.http.get<Array<Comment>>(baseUrl + "/" + id + "/comments").map( response => { 
      let retVal: Comment[] = [];
      response.forEach(elem => retVal.push(new Comment(elem)));
        return retVal;
    });
  }

  saveComment(comment){
    return this.http.post(baseUrl + "/" + comment.posts + "/comments", comment).map( res => new Comment(res))
  }

}

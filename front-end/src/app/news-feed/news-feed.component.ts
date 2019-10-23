import { Component, OnInit } from '@angular/core';

import { NewFeedService } from './service/new-feed.service';
import { Post } from './model/post';
import { Comment } from './model/comment';

@Component({
  selector: 'fed-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
	private posts: Post[];
  private comments: Comment[];
  private params = {
    sort: "date",
    sortDirection: "",
    page: 1,
    pageSize: 3  
  }

  constructor(private newFeedService: NewFeedService) { }

  ngOnInit() {
  	this.getPosts();
  }

  getPosts(){
  	this.newFeedService.getPosts(this.params).subscribe(res => {
  		this.posts = res.posts;
  	});
  }  

  updateParams(){
    this.params.pageSize += 3;
    this.getPosts();
  }

}

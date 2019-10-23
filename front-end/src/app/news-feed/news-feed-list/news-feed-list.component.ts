import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../model/post';

@Component({
  selector: 'fed-news-feed-list',
  templateUrl: './news-feed-list.component.html',
  styleUrls: ['./news-feed-list.component.css']
})
export class NewsFeedListComponent implements OnInit {
	@Input() private posts: Post[];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Post } from '../../model/post';
import { NewFeedService } from '../../service/new-feed.service';
import { Comment } from '../../model/comment';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'fed-news-feed-detail',
  templateUrl: './news-feed-detail.component.html',
  styleUrls: ['./news-feed-detail.component.css']
})
export class NewsFeedDetailComponent implements OnInit {
	@Input() private post: Post;
	private comments: Comment[];

  constructor(private newFeedService: NewFeedService, private modalService: NgbModal) { }

  ngOnInit() {
  	this.getComments(this.post._id);
  }

  getComments(id){
    this.newFeedService.getComments(id).subscribe(res => {
      this.comments = res;
    });
  }

  openModal(post) {
    const modalRef = this.modalService.open(FormComponent);  
    modalRef.componentInstance.post = post; 
    modalRef.componentInstance.sendInfo.subscribe((emmitedValue) => {
      this.comments.push(emmitedValue);
    }); 
  }

}

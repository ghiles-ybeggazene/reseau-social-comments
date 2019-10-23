import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Comment } from '../../../model/comment';
import { Post } from '../../../model/post';
import { NewFeedService } from '../../../service/new-feed.service';

@Component({
  selector: 'fed-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	@Input() post: Post;
	private commentForm: FormGroup;
	private comment = new Comment();
	private sendInfo = new EventEmitter();	

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal, private newFeedService: NewFeedService) {
  	this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
  	this.commentForm = this.fb.group({
  		comment: ["", Validators.required]  		
  	});
  }

  saveComment(){
  	this.comment.date = (new Date).toISOString();
  	this.comment.user = {name:"Bojan Rusmir", picture: "default.jpg"};
  	this.comment.text = this.commentForm.value.comment;
  	this.comment.posts = this.post._id;
  	this.newFeedService.saveComment(this.comment).subscribe(res => this.sendInfo.emit(res));
  	this.comment = new Comment();
  }

}

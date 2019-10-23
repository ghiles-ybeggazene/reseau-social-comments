import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fed-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	@Input() private comment;
  constructor() { }

  ngOnInit() {
  }

}

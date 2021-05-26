import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

	public comments:any[]=[];
	@Input('postComments')

	set comment(data: any[]) {
		console.log(data);
		if(data !=null && data != undefined) {
			this.comments=data;
		}
	}

	constructor() { }

  	ngOnInit(): void {
  	}

}

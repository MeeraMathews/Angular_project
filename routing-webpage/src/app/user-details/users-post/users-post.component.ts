import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetapiService } from 'src/app/getapi.service';

@Component({
	selector: 'app-users-post',
	templateUrl: './users-post.component.html',
	styleUrls: ['./users-post.component.css']
})
export class UsersPostComponent implements OnInit {

	public userPosts: any[] = [];
	public comments: any[] = [];
	public currentPost: any = null;

	constructor(
		private getApiService: GetapiService,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.route.params.subscribe((params: any) => {
			this.getUserPost(params['id']);
		})
	}

	private getUserPost(id: number) {
		this.getApiService.getUserPost(id).subscribe((res: any) => {
			this.userPosts = res;
		})
	}

	public commentSection(post: any) {
		this.getApiService.getUserComments(post.id).subscribe((res: any) => {
			this.comments = res;
			this.currentPost = post;
		})
	}

}

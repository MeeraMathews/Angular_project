import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class GetapiService {

	constructor(
		private http:HttpClient
	) { }

	public apicall() {
		return this.http.get('https://jsonplaceholder.typicode.com/users/');
	}

	public getUserDetails(id: number) {
		return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
	}

	public getUserPost(id: number) {
		return this.http.get('https://jsonplaceholder.typicode.com/users/' + id +'/posts');
	}

	public getUserComments(postId: number) {
		return this.http.get('https://jsonplaceholder.typicode.com/posts/' + postId +'/comments');
	}
}

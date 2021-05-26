import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GetapiService } from '../getapi.service';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

	public userDetails: any = null;

	constructor(
		private getApiService: GetapiService,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.route.params.subscribe((params: any) => {
			this.getUser(params['id']);
		})
	}

	private getUser(id: number) {
		this.getApiService.getUserDetails(id).subscribe((res: any) => {
			this.userDetails = res;
		})
	}
}

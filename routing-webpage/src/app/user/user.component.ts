import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../getapi.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	public userList: any[] = [];

	constructor(
		private getapiService: GetapiService
	) { }

	ngOnInit(): void {
		this.getUser();
	}

	private getUser() {
		this.getapiService.apicall().subscribe((res: any)=>{
			this.userList=res;
		})
	}


}

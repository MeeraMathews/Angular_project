import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { GetapiService } from './getapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	//id:number;
	public userDetails: any=[];
	constructor(
		//public params:number,
		public userDetailsService: GetapiService,
    	private route:ActivatedRoute,
  	){ }
	ngOnInit():void{
		//this.route.paramMap.subscribe((params:ParamMap)=>
		//{
			//this.id=params.get('id');
		//});
		this.userDetailsService.apicall().subscribe((res: any) => {
			// sucess
			this.userDetails = res;
			console.log(this.userDetails);
		},	err => {
			// error
			console.log(err);	
			});
  	}
}
		

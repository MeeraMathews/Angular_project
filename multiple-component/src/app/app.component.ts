import { Component, OnInit } from '@angular/core';
import{ GetapiService } from './getapi.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public latestInsights:any = [];

    constructor(
      private latestInsightService: GetapiService
      ) { }

    ngOnInit(){
		this.latestInsightService.apicall().subscribe((res: any) => {
			// sucess
			this.latestInsights = res;
			console.log(this.latestInsights);
			
			
		}, err => {
			// error
			console.log(err);
			
		});
    }
}

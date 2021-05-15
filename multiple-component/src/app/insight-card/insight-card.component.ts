import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-insight-card',
	templateUrl: './insight-card.component.html',
	styleUrls: ['./insight-card.component.css']
})
export class InsightCardComponent implements OnInit {

	@Input() insightVariable: any;

	constructor() { }

	ngOnInit(): void {
	}

}

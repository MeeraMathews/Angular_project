import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-background-design',
	templateUrl: './background-design.component.html',
	styleUrls: ['./background-design.component.css']
})
export class BackgroundDesignComponent implements OnInit {

	public isScrolled: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	@HostListener("document:scroll")
	scrollfunction() {
		if (document.documentElement.scrollTop > 50) {
			this.isScrolled = true;
		} else {
			this.isScrolled = false;
		}
	}

}

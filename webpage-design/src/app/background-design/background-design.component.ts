import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-background-design',
	templateUrl: './background-design.component.html',
	styleUrls: ['./background-design.component.css']
})
export class BackgroundDesignComponent implements OnInit {

	public isScrolled: boolean = false;
	public currentWindowWidth: number;

	constructor() { }

	ngOnInit(): void {
		this.currentWindowWidth = window.innerWidth;
	}


	openNavigation() {
		document.getElementById ("nav-list").style.width = "250px";
		document.getElementById("side-bar").style.marginLeft = "250px";
	}

	closeNav() {
		document.getElementById("nav-list").style.width = "0";
		document.getElementById("side-bar").style.marginLeft= "0";
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

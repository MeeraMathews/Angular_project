import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-background-design',
	templateUrl: './background-design.component.html',
	styleUrls: ['./background-design.component.css']
})
export class BackgroundDesignComponent implements OnInit {

	public isScrolled: boolean = false;
	public currentWindowWidth: number;
	public icon = document.querySelector('.icon');
	public isChecked: boolean = false;
	constructor() { }

	ngOnInit(): void {
		this.currentWindowWidth = window.innerWidth;
	}
	onNativeChange(e) {
		if(e.target.checked){
		  this.icon.classList.add('.nav-link');
		  this.isChecked=true;
		}
		else {
			this.icon.classList.remove('.nav-link');
			this.isChecked=false;
		}
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

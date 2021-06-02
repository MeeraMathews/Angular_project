import { Component, OnInit ,HostListener} from '@angular/core';

@Component({
  selector: 'app-background-design',
  templateUrl: './background-design.component.html',
  styleUrls: ['./background-design.component.css']
})
export class BackgroundDesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  header_variable=false;
  @HostListener("document:scroll")
  scrollfunction() {
	if( document.body.scrollTop>5 || document.documentElement.scrollTop>5)
	{
		this.header_variable=true;

	}
	else {
		this.header_variable=false;
	}
  }

}

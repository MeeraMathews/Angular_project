import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  properties(i: number) {
    return new Array(i);
    }

  constructor() { }

  ngOnInit(): void {
  }

}

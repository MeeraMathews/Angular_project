import { Component, OnInit } from '@angular/core';
// import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements OnInit {
  public isCollapsed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

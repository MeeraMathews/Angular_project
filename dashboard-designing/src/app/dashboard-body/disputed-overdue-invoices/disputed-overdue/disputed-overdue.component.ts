import { AfterViewInit } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Component, ViewChild, OnInit } from "@angular/core";
import { Chart } from "chart.js";

// import {
//   ApexNonAxisChartSeries,
//   ApexResponsive,
//   ApexTitleSubtitle,
//   ApexLegend,
//   ApexDataLabels,
//   ApexChart
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
//   title: ApexTitleSubtitle;
//   legend: ApexLegend;
//   dataLabels: ApexDataLabels;
// };


@Component({
  selector: 'app-disputed-overdue',
  templateUrl: './disputed-overdue.component.html',
  styleUrls: ['./disputed-overdue.component.css']
})
export class DisputedOverdueComponent implements AfterViewInit {
  @ViewChild('pieCanvas') private pieCanvas: ElementRef;

  pieChart: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.pieChartBrowser();
  }

  pieChartBrowser(): void {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Apple', 'Google', 'Facebook', 'TCS', 'Infosys', 'IBM'],
        datasets: [{
          backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#95a5a6',
            '#9b59b6',
            '#f1c40f',
            '#e74c3c'
          ],
          data: [32, 29, 13, 17, 38, 14]
        }]
      }
    });
  }

}

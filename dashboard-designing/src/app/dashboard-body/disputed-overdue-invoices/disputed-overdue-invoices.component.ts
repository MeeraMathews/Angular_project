// import { ElementRef } from "@angular/core";
// import { AfterViewInit } from "@angular/core";
import { Component, ViewChild, OnInit } from "@angular/core";
// import { Chart } from 'chart.js';

import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend,
  ApexTitleSubtitle,
  ApexDataLabels
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
};

@Component({
  selector: 'app-disputed-overdue-invoices',
  templateUrl: './disputed-overdue-invoices.component.html',
  styleUrls: ['./disputed-overdue-invoices.component.css']
})
export class DisputedOverdueInvoicesComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  doughnutChart: any;

  constructor() {
    this.chartOptions = {
      series: [65, 45],
      dataLabels:{ enabled:false},
      chart: {
        type: "donut"
      },
      labels: ["Disputed invoices", "Average"],
      legend: {
        position:'bottom'
      },
      title: {
        text:"Disputed vs Overdue invoices"
      },
      responsive: [
        {
          breakpoint: 360,
          options: {
            chart: {
              width: '100%'
            },
            legend: {
              position: "bottom"
            }
          }
        },
      ]
    };
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}

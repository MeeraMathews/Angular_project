import { Component, ViewChild, OnInit } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexTitleSubtitle,
  ApexLegend,
  ApexDataLabels,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};


@Component({
  selector: 'app-disputed-overdue',
  templateUrl: './disputed-overdue.component.html',
  styleUrls: ['./disputed-overdue.component.css']
})
export class DisputedOverdueComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  pieChart: any;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43],
      chart: {
        width: '100%',
        height:'auto',
        type: "pie"
      },
      dataLabels:{ enabled:false},
      labels: ["30 Days", "60 Days", "90 Days", "90+ Days"],
      legend:{
        position:'bottom'
      },
      title: {
        text:"Disputed vs Overdue invoices"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}

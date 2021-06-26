import { Component, ViewChild, OnInit } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  subtitle:ApexTitleSubtitle;
  fill: ApexFill;
};

@Component({
  selector: 'app-inventory-turnover',
  templateUrl: './inventory-turnover.component.html',
  styleUrls: ['./inventory-turnover.component.css']
})
export class InventoryTurnoverComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41],

        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20],
          color:"#af60ce"
        },
        {
          name: "PRODUCT C",
          data: [13, 23, 20],
          color:"#6bbceb"
        }
      ],

      chart: {
        type: "bar",
        height: 300,
        width:300,
        stacked: true,
        toolbar: {
          show:false
        }
      },

      title: {
        text:"Inventory Turnover"
      },

      responsive: [
        {
          breakpoint: 600,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      xaxis: {
        categories: [
          "Q1",
          "Q1",
          "Q1"
        ]
      },
      fill: {
        opacity: 1
      },
      legend: {
        show:false
      }
    };
  }

  ngOnInit(): void {
  }

}

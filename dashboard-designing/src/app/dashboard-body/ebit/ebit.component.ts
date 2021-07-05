import { Component, ViewChild, OnInit } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexResponsive,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  subtitle:ApexTitleSubtitle;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  responsive:  ApexResponsive[];
};

@Component({
  selector: 'app-ebit',
  templateUrl: './ebit.component.html',
  styleUrls: ['./ebit.component.css']
})
export class EbitComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "series1",
          data: [35, 40, 25, 51, 45, 110, 100]
        }
      ],
      chart: {
        height: 'auto',
        width:'100%',
        type: "area",
        toolbar: {
          show:false
        }
      },

      title: {
        text:"EBIT ( Earnings before Interest & Tax )"
      },

      subtitle: {
        text:"1 Jan 2020 to 31 Dec 2020",
        style: {
          color:"#af60ce",
          fontSize:"10"
        },
        align:"right"
      },

      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },

      responsive: [{
        breakpoint: 360,
       options: {
         chart: {
          width: '100%',
          height: 'auto'
         }
       }
      }],
    };
  }

  public generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  ngOnInit(): void {
  }

}

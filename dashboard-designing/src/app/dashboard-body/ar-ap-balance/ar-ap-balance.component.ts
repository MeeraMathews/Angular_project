import { Component, ViewChild, OnInit } from "@angular/core";
// import * as from "ngx-bootstrap";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexResponsive,
  ApexDataLabels,
  ApexXAxis,
  ApexStroke,
  ApexLegend,

} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: ApexStroke; // ApexStroke;
  dataLabels: ApexDataLabels; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  subtitle:ApexTitleSubtitle;
};

@Component({
  selector: 'app-ar-ap-balance',
  templateUrl: './ar-ap-balance.component.html',
  styleUrls: ['./ar-ap-balance.component.css']
})
export class ArApBalanceComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
          color: "#a55fc5"
        },
        {
          name: "",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
          color: "#a55fc5"
        }
      ],

      legend: {
        show:false
      },

      chart: {
        height: 400,
        width:"100%",
        type: "line",
        toolbar: {
          show: false
        },
      },

      stroke: {
        width: [0, 4]
      },

      title: {
        text: "AP and AR Balance"
      },

      subtitle: {
        text:"Avg. $5.309",
        style: {
          color:"#af60ee",
          fontSize:"10"
        },
      },

      dataLabels: {
        enabled: false,
      },

      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],

      xaxis: {
        type: "datetime"
      },

      yaxis: [
        {
          title: {
            text: ""
          }
        },
        {
          opposite: true,
          title: {
            text: ""
          }
        }
      ],

      responsive: [{
        breakpoint: 992,
        options: {
          chart: {
            width:'100%',
            height: 'auto'
          }
        }
      }],
    };
  }

  ngOnInit(): void {
  }

}

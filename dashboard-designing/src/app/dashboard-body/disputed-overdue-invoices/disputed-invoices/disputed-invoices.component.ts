import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexLegend,
  ApexResponsive,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: any; //ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  grid: any; //ApexGrid;
  colors: any;
  toolbar: any;
  legend: ApexLegend;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-disputed-invoices',
  templateUrl: './disputed-invoices.component.html',
  styleUrls: ['./disputed-invoices.component.css']
})

export class DisputedInvoicesComponent implements OnInit {
  public chart1options: Partial<ChartOptions>;

  public commonOptions: Partial<ChartOptions> = {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    toolbar: {
      tools: {
        selection: false
      }
    },
    markers: {
      size: 3,
      hover: {
        size: 4
      }
    },
    tooltip: {
      followCursor: false,
      theme: "dark",
      x: {
        show: false
      },
      marker: {
        show: false
      },
      y: {
        title: {
          formatter: function() {
            return "";
          }
        }
      }
    },
    grid: {
      clipMarkers: false
    },
    xaxis: {
      type: "datetime"
    }
  };

  constructor() {
    this.initCharts();
   }

   public initCharts(): void {
    this.chart1options = {
      series: [
        {
          name: "chart1",
          color:"#379475",
          data: [{
            x: 2014,
            y: 30
          },
          {
            x: 2015,
            y: 50
          },
          {
            x: 2016,
            y: 30
          },
          {
            x: 2017,
            y: 40
          },
          {
            x: 2018,
            y: 60
          },
          {
            x: 2019,
            y: 50
          },
          {
            x: 2020,
            y: 65
          }]
        },
        {
          name: "chart2",
          color: "#008FFB",
          data: [{
            x: 2014,
            y: 40
          },
          {
            x: 2015,
            y: 20
          },
          {
            x: 2016,
            y: 40
          },
          {
            x: 2017,
            y: 20
          },
          {
            x: 2018,
            y: 30
          },
          {
            x: 2019,
            y: 20
          },
          {
            x: 2020,
            y: 30
          }]
        }
      ],
      chart: {
        id: "fb",
        group: "social",
        type: "line",
        height: 'auto',
        width:"100%",
        toolbar: {
          show:false
        }
      },
      title: {
        text:"Disputed invoices"
      },
      legend: {
        show:false
      },
      colors: ["#008FFB"],
      yaxis: {
        tickAmount: 6,
        labels: {
          minWidth: 40
        }
      },
      responsive : [{
        breakpoint:360,
        options:
        {
          chart: {
            width:'100%',
            height: 'auto'
          }
        }
      }],
    };
  }

  public generateDayWiseTimeSeries(baseval, count, yrange): any[] {
    let i = 0;
    let series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  ngOnInit(): void {
  }

}

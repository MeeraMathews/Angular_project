import { OnInit } from "@angular/core";
import { Component, ViewChild } from "@angular/core";
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  responsive: ApexResponsive[];
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-ebit-cogs',
  templateUrl: './ebit-cogs.component.html',
  styleUrls: ['./ebit-cogs.component.css']
})
export class EbitCogsComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "distibuted",
          data: [20, 40, 15, 35, 25, 50]
        }
      ],
      responsive: [{
        breakpoint: 992,
        options: {
          chart: {
            width: '100%',
            height: 'auto'
          }
        }
      }],
      chart: {
        height: 'auto',
        width: '100%',
        type: "bar",
        events: {
          click: function (chart, w, e) {
          }
        },
        toolbar: {
          show: false
        }
      },

      title: {
        text: "EBIT (Earnings Before Interest & Tax)"
      },

      colors: [
        "#008FFB"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: true
      },
      xaxis: {
        categories: [
          "2019 Q1",
          "2019 Q2",
          "2019 Q3",
          "2019 Q4",
          "2019 Q5",
          "2019 Q6"
        ],
        labels: {
          style: {
            colors: [
              "#111"
            ],
            fontSize: "10px"
          }
        }
      },
    };
    this.chartOptions2 = {
      colors: [
        "#a55fc5"
      ],
      title: {
        text: "Cost of Goods/Services"
      },
      subtitle: {
        text: "1 Jan 2020 to 31 Dec 2020",
        align: "right",
        style: {
          fontSize: "10",
          color: "#a55fc5"
        }
      },

      responsive:[{
        breakpoint:992,
        options: {
          chart: {
            width: '100%',
            height: 'auto'
          }
        }
      }],
    }
  }

  ngOnInit(): void {
  }

}

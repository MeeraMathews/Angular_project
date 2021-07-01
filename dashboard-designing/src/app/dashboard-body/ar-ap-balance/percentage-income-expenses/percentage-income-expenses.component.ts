import { OnInit } from "@angular/core";
import { Component, ViewChild } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexTitleSubtitle,
  ApexLegend,
  ApexDataLabels,
  ApexStroke,
  ApexResponsive
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  legend: ApexLegend;
  datalabel: ApexDataLabels;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-percentage-income-expenses',
  templateUrl: './percentage-income-expenses.component.html',
  styleUrls: ['./percentage-income-expenses.component.css']
})
export class PercentageIncomeExpensesComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [67],
      chart: {
        height: 190,
        width:200,
        type: "radialBar",
        toolbar: {
          show: false
        }
      },
      legend: {
        position:"bottom",
      },
      title: {
        text:"% of Income Budget"
      },
      plotOptions: {
        radialBar: {
          startAngle: -5,
          endAngle: 350,
          hollow: {
            margin: 0,
            size: "55%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: 5,
              show: true,
              color: "#000",
              fontSize: "20px"
            },
            value: {
              formatter: function(val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: "#111",
              fontSize: "20px",
              show: false
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["67%","Budget"],
      responsive :[{
        breakpoint:920,
        options: {
          chart: {
            width:400,
            height:'auto'
          }
        }
      }]
    };

    this.chartOptions2 = {
      series: [48],
      chart: {
        height: 195,
        width:200,
        type: "radialBar",
        toolbar: {
          show: false
        }
      },
      title: {
        text:"% of Expenses Budget"
      },
      labels: ["48%","Budget"],
      responsive :[{
        breakpoint:920,
        options: {
          chart: {
            width:400,
            height: 'auto'
          }
        }
      }],
      plotOptions: {
        radialBar: {
          startAngle: -5,
          endAngle: 350,
          hollow: {
            margin: 0,
            size: "55%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "48%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: 5,
              show: true,
              color: "#000",
              fontSize: "20px",
            },
            value: {
              formatter: function(val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: "#111",
              fontSize: "20px",
              show: false
            }
          }
        }
      }
    }
  }

  ngOnInit(): void {
  }
}

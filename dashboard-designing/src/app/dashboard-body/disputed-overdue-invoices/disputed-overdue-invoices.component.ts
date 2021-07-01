import { ElementRef } from "@angular/core";
import { AfterViewInit } from "@angular/core";
import { Component, ViewChild, OnInit } from "@angular/core";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-disputed-overdue-invoices',
  templateUrl: './disputed-overdue-invoices.component.html',
  styleUrls: ['./disputed-overdue-invoices.component.css']
})
export class DisputedOverdueInvoicesComponent implements AfterViewInit {
  @ViewChild('doughnutCanvas') doughnutCanvas: ElementRef;
  doughnutChart: any;

  constructor() { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Sachin', 'Dhoni', 'Kohli', 'Yuvaraj', 'Ganguly'],
        datasets: [{
          label: '# of Runs',
          data: [57, 33, 19, 22, 17],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }
}

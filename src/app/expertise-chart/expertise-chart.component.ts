import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-expertise-chart',
  templateUrl: './expertise-chart.component.html',
  styleUrls: ['./expertise-chart.component.scss']
})
export class ExpertiseChartComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['NodeJS', 'ReactJS/Angular', 'Java', 'Other Tech.'];
  public pieChartData: number[] = [22, 58, 15, 5];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgb(104, 160, 99)', 'rgb(97, 219, 251)', '#4a9ada', 'rgb(75, 139, 190)'],
    },
  ];
  public active = 'Year';

  constructor() { }

  ngOnInit(): void {
  }

  public filterType(filterType: string) {
    this.active = filterType;
  }
}

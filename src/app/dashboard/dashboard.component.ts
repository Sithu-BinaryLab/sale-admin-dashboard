import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { orderItems } from './order-items';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  items = orderItems;
  constructor() {
    Chart.register(...registerables, ChartDataLabels);
  }

  ngOnInit() {
    const labels = ['Mon', 'Tue', 'Web', 'Thu', 'Fir', 'Sat'];

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
        },
      ],
    };

    var myChart = new Chart('barCanvas', {
      type: 'bar',
      data: data,
      options: {
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        datasets: {
          bar: {
            barThickness: 20,
            borderRadius: {
              topLeft: 5,
              topRight: 5,
            },
          },
        },
        scales: {
          y: {
            display: false,
            ticks: {
              display: false,
            },
          },
          x: {
            ticks: {
              display: true,
            },
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
      },
    });

    var lineChart = new Chart('lineCanvas', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            backgroundColor: '#8ed1e6',
            borderColor: '#5683d6',
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        datasets: {
          bar: {
            barThickness: 20,
            borderRadius: {
              topLeft: 5,
              topRight: 5,
            },
          },
        },
        scales: {
          y: {
            display: false,
            ticks: {
              display: false,
            },
          },
          x: {
            display: false,
            ticks: {
              display: true,
            },
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
      },
    });

    var lineChart2 = new Chart('lineCanvas2', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            backgroundColor: '#98fabc',
            borderColor: '#00E086',
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        datasets: {
          bar: {
            barThickness: 20,
            borderRadius: {
              topLeft: 5,
              topRight: 5,
            },
          },
        },
        scales: {
          y: {
            display: false,
            ticks: {
              display: false,
            },
          },
          x: {
            display: false,
            ticks: {
              display: true,
            },
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
      },
    });

    var doughnutCanvas = new Chart('doughnutCanvas', {
      type: 'doughnut',
      data: {
        labels: ['Electronics', 'Cloths', 'Beauty Care', 'Books', 'Toys'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
              '#eb4034',
              '#346eeb',
              '#ebcc34',
              '#34deeb',
              '#34eb74',
            ],
            borderRadius: 10,
          },
        ],
      },
      options: {
        aspectRatio: 3.4,
        plugins: {
          datalabels: {
            formatter: function (value, context) {
              return value + '%';
            },
          },
          legend: {
            position: 'left',
            align: 'center',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
            },
            title: {
              text: 'Hello',
            },
            display: true,
          },
          tooltip: {
            enabled: false,
          },
        },
        datasets: {
          bar: {
            barThickness: 1,
          },
        },
        scales: {
          y: {
            display: false,
            ticks: {
              display: false,
            },
          },
          x: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
      },
    });

    var twoLineChart = new Chart('twoLineCanvas', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Last month',
            data: [20, 22, 26, 23, 22],
            fill: false,
            backgroundColor: '#8ed1e6',
            borderColor: '#0095FF',
            tension: 0.4,
            pointBackgroundColor: '#0095FF',
            borderWidth: 2,
            pointRadius: 2,
          },
          {
            label: 'this month',
            data: [15, 16, 17, 13, 14],
            fill: true,
            backgroundColor: '#98fabc',
            borderColor: '#00E096',
            tension: 0.4,
            pointBackgroundColor: '#00E096',
            borderWidth: 2,
            pointRadius: 2,
          },
        ],
      },
      options: {
        aspectRatio: 2.2,
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            display: true,
            position: 'bottom',
            align: 'center',
            labels: {
              usePointStyle: true,
              pointStyle: 'line',
            },
          },

          tooltip: {
            enabled: false,
          },
        },
        datasets: {
          bar: {
            barThickness: 20,
            borderRadius: {
              topLeft: 5,
              topRight: 5,
            },
          },
        },
        scales: {
          y: {
            display: false,
            ticks: {
              display: false,
            },
          },
          x: {
            display: false,
            ticks: {
              display: true,
            },
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
      },
    });

    var pieChart = new Chart('pieCanvas', {
      type: 'doughnut',
      data: {
        labels: ['Achieved'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [50],
            backgroundColor: ['#34eb74'],
            borderRadius: 10,
          },
        ],
      },
      options: {
        // elements: {
        //   center: {
        //     text: 'Red is 2/3 the total numbers',
        //     color: '#FF6384', // Default is #000000
        //     fontStyle: 'Arial', // Default is Arial
        //     sidePadding: 20, // Default is 20 (as a percentage)
        //     minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
        //     lineHeight: 25 // Default is 25 (in px), used for when text wraps
        //   }
        // },
        aspectRatio: 1.2,
        plugins: {
          datalabels: {
            formatter: function (value, context) {
              return value + '%';
            },
          },
          legend: {
            display: false,
            position: 'left',
            align: 'center',
            labels: {
              pointStyle: false,
            },
            title: {
              text: 'Hello',
            },
          },
          tooltip: {
            enabled: false,
          },
        },
        datasets: {
          bar: {
            barThickness: 1,
          },
        },
        scales: {
          y: {
            display: false,
            ticks: {
              display: false,
            },
          },
          x: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
      },
    });
  }
}

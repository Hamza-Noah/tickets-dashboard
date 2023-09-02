import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics-use.component.html',
  styleUrls: ['./statistics-use.component.scss']
})
export class StatisticsComponent implements AfterViewInit {
  chart: any = [];

  ngAfterViewInit() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 128, 255, 0.6)');
      gradient.addColorStop(1, 'rgba(0, 128, 255, 0)');

      this.chart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3, 7, 8, 10, 15, 9, 6],
              borderWidth: 2,
              borderCapStyle: 'round',
              fill: true,
              backgroundColor: gradient, // Use the gradient fill
              borderColor: '#8a74f9',
              cubicInterpolationMode: 'monotone',
              pointRadius: 0,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
              labels: {
                font: {
                  family: "'Neo Sans Arabic Regular'"
                }
              }
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              display: true,
              grid: {
                display: true,
              },
              ticks: {
                display: false,
                // @ts-ignore
                suggestedMax: 6,
                stepSize: 6,  
              },
            },
          },
          layout: {
            padding: 0,
          },
          elements: {
            line: {
              tension: 0.4,
            },
          },
        },
      });
    }
  }
}

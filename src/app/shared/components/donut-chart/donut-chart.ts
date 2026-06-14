import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-donut-chart',
  imports: [],
  templateUrl: './donut-chart.html',
  styleUrl: './donut-chart.scss',
})
export class DonutChart implements AfterViewInit {
  title = input.required<string>();
  labels = input.required<string[]>();
  data = input.required<number[]>();
  colors = input<string[]>(['#3B6D11', '#185FA5', '#BA7517', '#888780']);

  canvas = viewChild.required<ElementRef>('canvas');

  ngAfterViewInit() {
    new Chart(this.canvas().nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.labels(),
        datasets: [
          {
            data: this.data(),
            backgroundColor: this.colors(),
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { size: 12 },
              padding: 16,
              usePointStyle: true,
            },
          },
        },
      },
    });
  }
}

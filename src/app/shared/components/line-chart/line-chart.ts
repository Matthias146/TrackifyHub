import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  imports: [],
  templateUrl: './line-chart.html',
  styleUrl: './line-chart.scss',
})
export class LineChart implements AfterViewInit {
  title = input.required<string>();
  labels = input.required<string[]>();
  data = input.required<number[]>();

  canvas = viewChild.required<ElementRef>('canvas');

  ngAfterViewInit() {
    new Chart(this.canvas().nativeElement, {
      type: 'line',
      data: {
        labels: this.labels(),
        datasets: [
          {
            data: this.data(),
            borderColor: '#185FA5',
            backgroundColor: 'rgba(24, 95, 165, 0.08)',
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointBackgroundColor: '#185FA5',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: 'rgba(0,0,0,0.05)' } },
          y: { grid: { color: 'rgba(0,0,0,0.05)' } },
        },
      },
    });
  }
}

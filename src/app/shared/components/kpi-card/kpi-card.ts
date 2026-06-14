import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-kpi-card',
  imports: [NgIcon],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.scss',
})
export class KpiCard {
  title = input.required<string>();
  value = input.required<string>();
  trend = input<string>();
  icon = input<string>();
}

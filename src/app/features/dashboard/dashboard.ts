import { Component } from '@angular/core';
import { KpiCard } from '../../shared/components/kpi-card/kpi-card';
import { NgIcon } from '@ng-icons/core';
import { LineChart } from '../../shared/components/line-chart/line-chart';
import { DonutChart } from '../../shared/components/donut-chart/donut-chart';

@Component({
  selector: 'app-dashboard',
  imports: [KpiCard, NgIcon, LineChart, DonutChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}

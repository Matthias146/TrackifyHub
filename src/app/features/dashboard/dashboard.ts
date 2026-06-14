import { Component } from '@angular/core';
import { KpiCard } from '../../shared/components/kpi-card/kpi-card';
import { NgIcon } from '@ng-icons/core';
import { LineChart } from '../../shared/components/line-chart/line-chart';
import { DonutChart } from '../../shared/components/donut-chart/donut-chart';
import { Order, OrdersTable } from '../../shared/components/orders-table/orders-table';

@Component({
  selector: 'app-dashboard',
  imports: [KpiCard, NgIcon, LineChart, DonutChart, OrdersTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  recentOrders: Order[] = [
    {
      id: 'ORD-9932',
      customer: 'Acme Corporation',
      date: 'Oct 24, 2023',
      amount: '€4,250.00',
      status: 'shipped',
    },
    {
      id: 'ORD-9931',
      customer: 'Globex Inc.',
      date: 'Oct 24, 2023',
      amount: '€1,120.50',
      status: 'pending',
    },
    {
      id: 'ORD-9930',
      customer: 'Soylent Corp',
      date: 'Oct 23, 2023',
      amount: '€8,900.00',
      status: 'delivered',
    },
    {
      id: 'ORD-9929',
      customer: 'Initech',
      date: 'Oct 23, 2023',
      amount: '€450.00',
      status: 'cancelled',
    },
    {
      id: 'ORD-9928',
      customer: 'Umbrella Corp',
      date: 'Oct 22, 2023',
      amount: '€12,450.00',
      status: 'delivered',
    },
  ];
}

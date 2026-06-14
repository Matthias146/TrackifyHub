import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
}

@Component({
  selector: 'app-orders-table',
  imports: [NgIcon],
  templateUrl: './orders-table.html',
  styleUrl: './orders-table.scss',
})
export class OrdersTable {
  orders = input.required<Order[]>();
}

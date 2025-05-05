// dashboard-home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html'
})
export class DashboardHomeComponent {
  widgets = [
    { title: 'Widget A', content: 'Details of A', visible: true },
    { title: 'Widget B', content: 'Details of B', visible: true }
  ];

  onMenuChange(item: string) {
    console.log('Menu selected:', item);
    // You can add logic to toggle widgets here
  }
}

// sidebar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems: string[] = ['Dashboard', 'Reports', 'Settings', 'Users']; // Add any menu items here

  // This function will be triggered when an item is clicked
  selectItem(item: string) {
    console.log('Selected Item:', item);
    // You can also use this method to handle routing or any other functionality based on the item clicked
  }
}

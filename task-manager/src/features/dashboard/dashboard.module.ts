import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { SharedModule } from 'src/shared/shared.module';
import { SidebarComponent } from 'src/shared/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class DashboardModule { }

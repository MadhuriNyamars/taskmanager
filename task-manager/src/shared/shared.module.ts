import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WidgetComponent } from './components/widget/widget.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    WidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    WidgetComponent
  ]
})
export class SharedModule { }

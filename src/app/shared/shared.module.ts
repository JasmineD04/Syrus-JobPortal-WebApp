import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToastsComponent } from './components/toasts/toasts.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ToastsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

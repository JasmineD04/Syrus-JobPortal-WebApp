import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { JobOpeningsComponent } from './job-openings/job-openings.component';
import { QueryComponent } from './query/query.component';



@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    PreferencesComponent,
    JobOpeningsComponent,
    QueryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }

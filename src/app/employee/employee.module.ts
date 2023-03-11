import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { JobOpeningsComponent } from './job-openings/job-openings.component';
import { QueryComponent } from './query/query.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    PreferencesComponent,
    JobOpeningsComponent,
    QueryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    JobOpeningsComponent,
    QueryComponent,
    EmployeeDashboardComponent
  ]
})
export class EmployeeModule { }

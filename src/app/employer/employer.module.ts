import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { PostJobOpeningsComponent } from './post-job-openings/post-job-openings.component';
import { TrackApplicationComponent } from './track-application/track-application.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    EmployerDashboardComponent,
    PostJobOpeningsComponent,
    TrackApplicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class EmployerModule { }

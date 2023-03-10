import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { JobOpeningsComponent } from './employee/job-openings/job-openings.component';
import { QueryComponent } from './employee/query/query.component';
import { EmployerDashboardComponent } from './employer/employer-dashboard/employer-dashboard.component';
import { PostJobOpeningsComponent } from './employer/post-job-openings/post-job-openings.component';
import { TrackApplicationComponent } from './employer/track-application/track-application.component';
import { AboutComponent } from './home/about/about.component';
import { EmployeeLoginComponent } from './home/employee-login/employee-login.component';
import { EmployerLoginComponent } from './home/employer-login/employer-login.component';
import { EmployerSignUpComponent } from './home/employer-sign-up/employer-sign-up.component';


const routes: Routes = [
  {path:'signin',component:EmployerSignUpComponent},
  {path:'jobOpening',component:PostJobOpeningsComponent},
  {path:'home',component:AboutComponent},
  {path:'raiseQuery',component:QueryComponent},
  {path:'opening',component:JobOpeningsComponent},
  {path:'track',component:TrackApplicationComponent},
  {path:'login',component:EmployerLoginComponent},
  {path:'employeeDashboard',component:EmployeeDashboardComponent},
  {path:'employerDashboard',component:EmployerDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployerDashboardComponent } from './employer/employer-dashboard/employer-dashboard.component';
import { PostJobOpeningsComponent } from './employer/post-job-openings/post-job-openings.component';
import { TrackApplicationComponent } from './employer/track-application/track-application.component';
import { AboutComponent } from './home/about/about.component';
import { EmployeeLoginComponent } from './home/employee-login/employee-login.component';
import { EmployerLoginComponent } from './home/employer-login/employer-login.component';
import { EmployerSignUpComponent } from './home/employer-sign-up/employer-sign-up.component';


const routes: Routes = [
  // {path:'signin',component:EmployeeLoginComponent},
   {path:'login',component:EmployerLoginComponent},
   {path:'signUp',component:EmployerSignUpComponent},
   {path:'jobOpenings',component:PostJobOpeningsComponent},
   {path:'home',component:AboutComponent},
   {path:'employeeDashboard',component:EmployeeDashboardComponent},
   {path:'employerDashboard',component:EmployerDashboardComponent},
   {path:'trackApplication',component:TrackApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

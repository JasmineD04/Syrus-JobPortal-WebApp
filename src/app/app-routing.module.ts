import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostJobOpeningsComponent } from './employer/post-job-openings/post-job-openings.component';
import { AboutComponent } from './home/about/about.component';
import { EmployeeLoginComponent } from './home/employee-login/employee-login.component';
import { EmployerLoginComponent } from './home/employer-login/employer-login.component';
import { EmployerSignUpComponent } from './home/employer-sign-up/employer-sign-up.component';
import { MediumComponent } from './home/medium/medium.component';

const routes: Routes = [
  // {path:'signin',component:EmployeeLoginComponent},
   {path:'signup',component:EmployerLoginComponent},
   {path:'register',component:EmployerSignUpComponent},
   {path:'job',component:PostJobOpeningsComponent},
   {path:'home',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

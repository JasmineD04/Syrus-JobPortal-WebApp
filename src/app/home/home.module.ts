import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EmployeeSignUpComponent } from './employee-sign-up/employee-sign-up.component';
import { EmployerSignUpComponent } from './employer-sign-up/employer-sign-up.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    EmployeeLoginComponent,
    EmployerLoginComponent,
    EmployeeSignUpComponent,
    EmployerSignUpComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

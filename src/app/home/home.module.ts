import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EmployeeSignUpComponent } from './employee-sign-up/employee-sign-up.component';
import { EmployerSignUpComponent } from './employer-sign-up/employer-sign-up.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediumComponent } from './medium/medium.component';



@NgModule({
  declarations: [
    EmployeeLoginComponent,
    EmployerLoginComponent,
    EmployeeSignUpComponent,
    EmployerSignUpComponent,
    AboutComponent,
    MediumComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports:[
    AboutComponent
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './home/about/about.component';
import { HomeModule } from './home/home.module';
import { EmployerModule } from './employer/employer.module';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports:[
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        SharedModule,
        HomeModule,
        EmployerModule,
        EmployeeModule
    ]
})
export class AppModule { }

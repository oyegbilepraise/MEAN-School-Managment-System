import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './Admin/login/login.component';
import { CoursesComponent } from './Admin/courses/courses.component';
import { AddStaffComponent } from './Admin/add-staff/add-staff.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { DashlandingComponent } from './Admin/dashlanding/dashlanding.component';
import { StaffloginComponent } from './Staff/stafflogin/stafflogin.component';
import { StaffdashboardComponent } from './Staff/staffdashboard/staffdashboard.component';
import { StudentloginComponent } from './Student/studentlogin/studentlogin.component';
import { StudentdashboardComponent } from './Student/studentdashboard/studentdashboard.component';
import { StudentregistrationComponent } from './Student/studentregistration/studentregistration.component';
import { DeptComponent } from './Admin/dept/dept.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    CoursesComponent,
    AddStaffComponent,
    DashboardComponent,
    DashlandingComponent,
    StaffloginComponent,
    StaffdashboardComponent,
    StudentloginComponent,
    StudentdashboardComponent,
    StudentregistrationComponent,
    DeptComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

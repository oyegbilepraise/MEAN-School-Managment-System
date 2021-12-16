import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './Admin/courses/courses.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { LoginComponent } from './Admin/login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StaffdashboardComponent } from './Staff/staffdashboard/staffdashboard.component';
import { StaffloginComponent } from './Staff/stafflogin/stafflogin.component';
import { StudentdashboardComponent } from './Student/studentdashboard/studentdashboard.component';
import { StudentloginComponent } from './Student/studentlogin/studentlogin.component';
import { StudentregistrationComponent } from './Student/studentregistration/studentregistration.component';


const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'my-admin', component: LoginComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'my-admin/dashboard', component: DashboardComponent},
  {path: 'staff-login', component: StaffloginComponent},
  {path: 'staff-dashboard/:id', component: StaffdashboardComponent},
  {path: 'student-portal/registration', component: StudentregistrationComponent},
  {path: 'student-portal/login', component: StudentloginComponent},
  {path: 'student-portal/home', component: StudentdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

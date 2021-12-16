  import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PortaalServiceService } from 'src/app/Services/portaal-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public show = false
  public showInstructor = false 
  public dash =  true
  public expression:any = true
  public showdept = false
  constructor(public _test:PortaalServiceService, public _http: HttpClient) { }

  ngOnInit(): void {
}
showCourses(){
  this.show = true
  this.showInstructor = false
  this.dash = false
  this.expression = false
  this.showdept = false
}

showDept(){
  this.showdept = true
  this.show = false
  this.showInstructor = false
  this.dash = false
  this.expression = false
}

showDash(){
  this.dash = true
  this.showInstructor = false
  this.show = false
  this.expression = false
  this.showdept = false
}

showInstructors(){
  this.showInstructor = true
  this.show = false
  this.dash = false
  this.expression = false
  this.showdept = false
}
showHome(){
  this.expression = true
  this.showInstructor = false
  this.show = false
  this.dash = false
  this.showdept = false
}
}

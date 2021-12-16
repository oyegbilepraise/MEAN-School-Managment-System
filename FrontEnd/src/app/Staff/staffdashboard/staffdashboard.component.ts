import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staffdashboard',
  templateUrl: './staffdashboard.component.html',
  styleUrls: ['./staffdashboard.component.css']
})
export class StaffdashboardComponent implements OnInit {

  constructor(public _http:HttpClient, public actRoute: ActivatedRoute) { }

  public id:any = ''
  public staffDetails:any = ''
  public showHome = true
  public showCourses = false
  public showExams = false
  public staffcourse:any = ''

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(param => {
      this.id = param.get('id')
    })

    this._http.get('http://localhost:4500/staff/getstaff').subscribe(res => {
      let response:any = res  
      let a = response.find((val:any) => val._id === this.id)
      this.staffDetails = a
      this.staffcourse = a.courses
      console.log(this.staffcourse);
         
    })
  }

  showHomee(){
    this.showHome = true
    this.showCourses = false
    this.showExams = false
  }

  showCourse(){
    this.showHome = false
    this.showCourses = true
    this.showExams = false
  }

  showExam(){
    this.showHome = false
    this.showCourses = false
    this.showExams = true
  }
  
}

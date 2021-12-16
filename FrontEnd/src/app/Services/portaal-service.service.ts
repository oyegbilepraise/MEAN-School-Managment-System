import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortaalServiceService {

  public show: any = new BehaviorSubject(true)
  public showInstructor: any = new BehaviorSubject(true)
  constructor(public _http: HttpClient, public router: Router) { }
  
  getAllCourses(){
    return this._http.get('http://localhost:4500/courses/allcourses')
  }

  getAllInstructor(){
    return this._http.get('http://localhost:4500/instructor/getinstructors') 
  }

  getAllDept(){
    return this._http.get('http://localhost:4500/department/getdept') 
  }

  getAllStudent(){
    return this._http.get('http://localhost:4500/student/getAllStudents')
  }
}

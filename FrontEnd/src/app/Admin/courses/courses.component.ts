import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PortaalServiceService } from 'src/app/Services/portaal-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: any = []
  public coursetitle: String = ''
  public coursecode: String = ''
  public courseunit: String = ''

  constructor(public _services:PortaalServiceService, public _http:HttpClient) { }

  ngOnInit(): void {
    this._services.getAllCourses().subscribe((data:any) => {
      this.courses = data
    })   
  }

  addCourse(){
    let {coursecode, coursetitle, courseunit} = this
      this._http.post('http://localhost:4500/courses/addcourse', {coursecode, courseunit, coursetitle}).subscribe(data => {
        this.courses.push(data)
        Swal.fire(
          'Course Added Succesfully!',
          '',
          'success'
        )
      })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PortaalServiceService } from 'src/app/Services/portaal-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  public Instructor:any = []
  public Courses:any = []
  public name:String = ''
  public email:String = ''
  public coursecode:String = ''
  public option: any = []
  public staffcourse: any = ''

  constructor(public _services:PortaalServiceService, public _http:HttpClient) { }

  ngOnInit(): void {
    this._services.getAllInstructor().subscribe((data:any) => {
      this.Instructor = data
      for (let a = 0; a < data.length; a++) {
        const element = data[a];
        let me = element
        this.staffcourse = me.courses
      }
    }) 

    this._services.getAllCourses().subscribe((data:any) => {
      this.Courses = data
    })   
  }

  newInput(course:any){
    if(this.option.includes(course)){
      return this.option
    }
    else{ 
      this.option.push([course])
    }
  }

  addInstructor(){
    let {name, email, option} = this
      this._http.post('http://localhost:4500/instructor/addinstructor', {name, email, option}).subscribe(data => {
        if(data){
          this.Instructor.push(data)
          Swal.fire(
            'Course Added Succesfully!',
            '',
            'success'
          )
        }
    })
  }
}
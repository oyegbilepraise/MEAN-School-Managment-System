import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PortaalServiceService } from 'src/app/Services/portaal-service.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {

  public deptName:String = ''
  public deptAbbrevation:String = ''
  public deptHOD:String = ''
  public Instructor:any = []
  public dept:any = []

  constructor(public _http:HttpClient, public _services:PortaalServiceService) { }

  ngOnInit(): void {
    this._services.getAllDept().subscribe((data:any) => {
      this.dept = data
      console.log(data);
    })

    this._services.getAllInstructor().subscribe((data:any) => {
      // th?is.Instructor = data
      for (let a = 0; a < data.length; a++) {
        const element = data[a];
        this.Instructor.push(element)
      }
    })
  }


  addDept(){
    let {deptName, deptAbbrevation, deptHOD} = this
    let a = this.Instructor.find((val:any) => val.name === deptHOD)
    let id = a._id
    // console.log(id);
    
 this._http.post('http://localhost:4500/department/adddept', {deptName, deptAbbrevation, id}).subscribe(data => {
      console.log(data);
    })
  }
}
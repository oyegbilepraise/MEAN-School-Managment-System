import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortaalServiceService } from 'src/app/Services/portaal-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {
    
    public model:String = ''
    public userForm: FormGroup = this.fb.group({});
    public allStudents:any = []

    constructor(public fb: FormBuilder, public router: Router, public _http: HttpClient , public services: PortaalServiceService) { }

  ngOnInit(): void {
    this.services.getAllStudent().subscribe((data:any) => {
      this.allStudents = data
    })


    this.userForm = this.fb.group({
      fName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      date: ['', [Validators.required]],
      phoneNo: ['', [Validators.required, Validators.minLength(11)]],
      rAddress: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      state: ['', [Validators.required]]
    })
  }

  get f() {
    return this.userForm.controls
  }

  submitForm(){
    let id = this.allStudents.length
    let myId = 200000 + Number(id) + 1
    let genId = `MAT-${myId}`
    console.log(genId);
    
    let value = this.userForm.value
    if(this.userForm.valid){
      this._http.post('http://localhost:4500/student/regStudent', {
        full_name: value.fName, email: value.email, password: value.password, phoneNo: value.phoneNo, address: value.rAddress, gender: value.gender, state: value.state, id: genId, date: value.date
      }).subscribe((data:any) => {
        if(data = 'email already exist'){
          alert('Use another Email Please')
        }
        else{
          console.log(data);
        }
      })
    }
  }
}

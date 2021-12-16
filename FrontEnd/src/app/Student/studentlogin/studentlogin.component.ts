import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortaalServiceService } from 'src/app/Services/portaal-service.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  constructor(public fb: FormBuilder, public router: Router, public _http: HttpClient, public services: PortaalServiceService) { }

  public userForm: FormGroup = this.fb.group({});

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]]
    })
  }

  get f() {
    return this.userForm.controls
  }


  submitForm() {
    let value = this.userForm.value;
    let email = value.email
    let password = value.password
    if (this.userForm.valid) {
      this._http.post('http://localhost:4500/student/studentLogin', {email, password}).subscribe((res:any) => {
        if(res){
          this.router.navigateByUrl('/student-portal/home', {state: {data: res}})
        }
      })
    }
  }

}

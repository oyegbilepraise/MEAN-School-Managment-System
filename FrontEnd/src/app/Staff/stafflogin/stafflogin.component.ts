import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortaalServiceService } from 'src/app/Services/portaal-service.service';

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})
export class StaffloginComponent implements OnInit {

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
      this._http.post('http://localhost:4500/staff/login', {email, password}).subscribe(res => {        
        if(res == 'NotRegistered'){
          alert('NotRegistered');
        }
        else{
          if(res != 'NotRegistered'){
            let a:any = res
            let id = a._id
            this.router.navigate([`/staff-dashboard/${id}`])
          }
        }
      })
    }}
}

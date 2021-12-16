import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortaalServiceService } from 'src/app/Services/portaal-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(public fb: FormBuilder, public router: Router, public _http: HttpClient, public services: PortaalServiceService) { }

  public userForm: FormGroup = this.fb.group({});
  
    ngOnInit(): void {
      this.userForm = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(8), Validators.required]]
      })
      console.log('Hafa');
  }


  get f() {
    return this.userForm.controls
  }


  submitForm() {
    let value = this.userForm.value;
    let email = value.email
    let password = value.password
    if (this.userForm.valid) {
      this._http.post('http://localhost:4500/admin/login', {email, password}).subscribe(res => {
        localStorage.setItem('token', String(res)) 
        if(res != 'Forbbiden'){
          alert('Enter')
          this.router.navigate(['/my-admin/dashboard'])
        }
        else{
          if(res === "Forbbiden"){
            console.log('Invalid User');
          }
        }
      })

      let token = (localStorage.getItem('token'))
      if(token){
        this._http.get('http://localhost:4500/admin/d', {
          headers: new HttpHeaders({
            'Authorization' : `Bearer ${token}`
          })
        }).subscribe(res => {
          if(res){
            console.log(res);
          }
        })
      }
      // if(token){
      //   this._http.get('http://localhost:4500/admin/d').subscribe(res => {
      //     if(res){
      //       console.log(res);
      //       this.router.navigate(['my-admin/dashboard'])
      //     }
      //   })
      // }
      // 
      // const requestOptions:any = {
      //   headers: new Headers({'Authorization' : `Bearer ${token}`})
      // }

    } 
  }
}

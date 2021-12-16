import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  // public userForm: FormGroup = this.fb.group({});

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    // this.userForm = this.fb.group({
    //   email: ['', [Validators.email, Validators.required]],
    //   password: ['', [Validators.minLength(8), Validators.required]]
    // })
  }

}

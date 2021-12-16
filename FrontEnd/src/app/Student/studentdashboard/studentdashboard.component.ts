import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  public studentInfo:any = []

  constructor(public router: Router, private location:Location) { }

  ngOnInit(): void {
    let a:any = this.location.getState()
    this.studentInfo = a.data
    console.log(this.studentInfo);
  }
}
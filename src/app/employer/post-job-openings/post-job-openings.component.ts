import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-post-job-openings',
  templateUrl: './post-job-openings.component.html',
  styleUrls: ['./post-job-openings.component.css']
})
export class PostJobOpeningsComponent implements OnInit {
  JobForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.createFundraiserForm()
  }
  createFundraiserForm():void{
    this.JobForm=new FormGroup({
      name:new FormControl(),
      email:new FormControl(),
      organization:new FormControl(),
      designation:new FormControl(),
      skill1:new FormControl,
      skill2:new FormControl,
      skill3:new FormControl,
      location:new FormControl,
      salary:new FormControl,
      language1:new FormControl,
      language3:new FormControl,
      description:new FormControl
    })
  }

  basic:boolean=false
  hard:boolean=false

  onclick(){
    this.basic=true
    console.log(this.basic)
  }
  upclick(){
    this.hard=true
  }
  
 
  


}

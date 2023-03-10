import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-post-job-openings',
  templateUrl: './post-job-openings.component.html',
  styleUrls: ['./post-job-openings.component.css']
})
export class PostJobOpeningsComponent implements OnInit {
  JobForm!:FormGroup
  selectedSkill:any;
  skills!:any[]
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
      skill:new FormControl(),
      location:new FormControl(),
      salary:new FormControl(),
      language:new FormControl(),
      description:new FormControl()
    })
  }

  selectSill(skill:any)
  {
    this.JobForm.patchValue({
      // category:categories.categoryID
    })
    // this.selectedCategory=categories.categoryName
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

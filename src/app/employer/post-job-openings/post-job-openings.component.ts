import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-post-job-openings',
  templateUrl: './post-job-openings.component.html',
  styleUrls: ['./post-job-openings.component.css']
})
export class PostJobOpeningsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  basic=false
  onclick(){
    this.basic=true
  }
  


}

import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {

  constructor(private router: Router,
    private homeService:HomeService) { }


  ngOnInit(): void {
    this.createForm()
  }
 

  employerLogin!:FormGroup
  active = 1;
  valid!:any;

  generateBody():any{
    const body=
    {
     ...this.employerLogin.value
    }
    console.log(body);
    return body
   
  }

  authenticate(){
    const body=this.generateBody()
    console.log("In authentication");
    this.homeService.employerLogin(body).subscribe((value:any)=>{
      this.valid=value.valid
      if(this.valid==0){

       }
       else{

       }
      }
    )
  }

  createForm(){
    this.employerLogin=new FormGroup({
      userName:new FormControl(),
      password:new FormControl(),
      role:new FormControl(),
    })
  }

  submitForm(){
    console.log("hi");
    this.authenticate();
  }

}


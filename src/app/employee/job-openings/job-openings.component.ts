import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.css']
})
export class JobOpeningsComponent implements OnInit {

  skills!:any[]
  languages!:any[]
  locations!:any[]
  selectedSkill?:string
  selectedLocation?:string
  selectedLanguage?:string

  categoryForm!:FormGroup

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.createForm()
    this.fetchData()

  }
  createForm(){
    this.categoryForm=new FormGroup({
      skills:new FormControl(),
      locations:new FormControl(),
      languages:new FormControl()
    })
  }

  selectSkill(skill:any){
    this.categoryForm.patchValue({
      skills:skill.SkillName
    })
    this.selectedSkill=skill.SkillName
  }
  selectLocation(location:any){
    this.categoryForm.patchValue({
      location:location.LocationName
    })
    this.selectedLocation=location.LocationName
  }
  selectLanguage(language:any){
    this.categoryForm.patchValue({
      languages:language.LanguageName
    })
    this.selectedLanguage=language.LanguageName
  }
  fetchData(){
    this.employeeService.fetchSkills().subscribe((value)=>this.skills=value)
    this.employeeService.fetchLanguages().subscribe((value)=>this.languages=value)
    this.employeeService.fetchLocations().subscribe((value)=>this.locations=value)
  }
  filter(){
    const body =  this .generateBody()
    this.employeeService.fetchJobs(body).subscribe((value)=>console.warn(value))
  }
  generateBody():any{
    const body = {
      skillName:this.selectedSkill,
      locationName:this.selectedLocation,
      languageName:this.selectedLanguage
    }
    return body
  }


}

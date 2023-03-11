import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, OperatorFunction, switchMap } from 'rxjs';
import { EmployerService } from '../employer.service';
@Component({
  selector: 'app-post-job-openings',
  templateUrl: './post-job-openings.component.html',
  styleUrls: ['./post-job-openings.component.css']
})
export class PostJobOpeningsComponent implements OnInit {
  JobForm!:FormGroup
  selectedSkills:any=[];
  selectedLocations:any=[];
  selectedLanguages:any=[]
  skills!:any[]
  languages!:any[]
  locations!:any[]
  constructor(private employerService:EmployerService) { }

  ngOnInit(): void {
    this.createFundraiserForm()
    this.fetchData()
  }

  selectSkill(){

  }
  fetchData(){
    this.employerService.fetchSkills().subscribe((value)=>this.skills=value)
    this.employerService.fetchLanguages().subscribe((value)=>this.languages=value)
    this.employerService.fetchLocations().subscribe((value)=>this.locations=value)
  }

 

  createFundraiserForm():void{
    this.JobForm=new FormGroup({
      organization:new FormControl(),
      designation:new FormControl(),
      skills:new FormControl(),
      locations:new FormControl(),
      salary:new FormControl(),
      languages:new FormControl(),
      Period:new FormControl()
    })
  }
  searchSkills:OperatorFunction<string,string[]>=($text:Observable<string>)=> $text.pipe(switchMap((value)=> value==='' ? []:
  this.employerService.fetchSkills()))

  formatterSkills(value:any){
    return value.SkillName;
  }

  selectSkills(value:any):void{
    value.preventDefault()
    if(!this.selectedSkills.includes(value.item.SkillName)){
      this.selectedSkills.push(value.item.SkillName)

    }
    this.JobForm.patchValue({skills:''})
    console.warn(this.selectedSkills)
  }

  searchLocations:OperatorFunction<string,string[]>=($text:Observable<string>)=> $text.pipe(switchMap((value)=> value==='' ? []:
  this.employerService.fetchLocations()))

  formatterLocations(value:any){
    return value.LocationName;
  }

  selectLocations(value:any):void{
    value.preventDefault()
    if(!this.selectedLocations.includes(value.item.LocationName)){
      this.selectedLocations.push(value.item.LocationName)

    }
    this.JobForm.patchValue({locations:''})
    console.warn(this.selectedLocations)
  }

  searchLanguages:OperatorFunction<string,string[]>=($text:Observable<string>)=> $text.pipe(switchMap((value)=> value==='' ? []:
  this.employerService.fetchLanguages()))

  formatterLanguages(value:any){
    return value.LanguageName;
  }

  selectLanguages(value:any):void{
    value.preventDefault()
    if(!this.selectedLanguages.includes(value.item.LanguageName)){
      this.selectedLanguages.push(value.item.LanguageName)

    }
    this.JobForm.patchValue({languages:''})
    console.warn(this.selectedLanguages)
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
  submit(){
    const body=this.generateBody()
    this.employerService.postJob(body).subscribe(()=>console.log("gya data job"))
    this.JobForm.reset()
  }
  generateBody():any{
    const body={
      organizationName: this.JobForm.get("organization")?.value,
      designation: this.JobForm.get("designation")?.value,
      skills: this.selectedSkills.join(","),
      locations: this.selectedLocations.join(","),
      languages: this.selectedLanguages.join(","),
      salary: this.JobForm.get("salary")?.value,
      period: this.JobForm.get("Period")?.value
  
    }
    return body
  }
  

  


}

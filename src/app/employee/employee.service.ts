import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  fetchSkills():Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/fetchSkills`)
  }
  fetchLocations():Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/fetchLocations`)
  }
  fetchLanguages():Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/fetchLanguages`)
  }
  fetchJobs(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/fetchJobs`,body)
  }
  
}

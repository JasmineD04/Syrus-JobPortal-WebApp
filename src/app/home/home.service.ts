import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // httpClient: any;

  constructor(private httpClient:HttpClient) { }

  employerLogin(body:any):Observable<any>{
      return this.httpClient.post(`${ApplicationConstants.APIURL}/loginUser`,
      body)
    
  }
}

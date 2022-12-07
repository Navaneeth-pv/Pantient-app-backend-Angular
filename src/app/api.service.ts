import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  
  fetchpatients=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  addPatient=(dataTosend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataTosend)
  }

}

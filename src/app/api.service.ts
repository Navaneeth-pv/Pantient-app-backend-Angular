import { HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpBackend) { }

  
  fetch
  }
  
  addPatient=(dataTosend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataTosend)
  }
}

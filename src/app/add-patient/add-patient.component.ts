import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {


  patientName=""
  patientId=""
  address=""
  contactNo=""
  doctorName=""


  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data : any ={
      "patientName":this.patientName,
      "patientId":this.patientId,
      "address":this.address,
      "contactNo":this.contactNo,
      "doctorName":this.doctorName,
    }

    console.log(data)

    this.api.addPatient(data).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
  }


}

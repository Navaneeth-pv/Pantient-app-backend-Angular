import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-patients',
  templateUrl: './view-all-patients.component.html',
  styleUrls: ['./view-all-patients.component.css']
})
export class ViewAllPatientsComponent {

  constructor (private api:ApiService){

    api.fetchpatients().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

  data:any=[]

}

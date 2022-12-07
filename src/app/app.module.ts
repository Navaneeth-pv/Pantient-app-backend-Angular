import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllPatientsComponent } from './view-all-patients/view-all-patients.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"add",
    component:AddPatientComponent
  },
  {
    path:"ViewAll",
    component:ViewAllPatientsComponent
  }


]


@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    NavbarComponent,
    ViewAllPatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

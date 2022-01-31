import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack(){
    
  }

  //Gets Forms
  public GetMainForm(data: any){

  }
  public GetAilmentsForm(data: any){
    
  }
  public GetParentsForm(data: any){
    
  }
  public GetEmergencyForm(data: any){
    
  }
  public GetBillingForm(data: any){
    
  }
  public GetStudentCardForm(data: any){
    this.SaveStudent();
  }
  //Methos to API
  private SaveStudent(){
    
  }
}

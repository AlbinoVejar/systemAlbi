import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false },
  },
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }]
})
export class SignUpComponent implements OnInit {

  mainForm = new FormGroup({
    studentData: new FormGroup({}),
    ailmentsData: new FormGroup({}),
    emergencyData: new FormGroup({}),
    billingData: new FormGroup({}),
    cardData: new FormGroup({})
  });
  constructor() { }

  get studentForm(){
    return this.mainForm.controls.studentData;
  }
  get ailmentsForm(){
    return this.mainForm.controls.ailmentsData;
  }
  get emergencyForm(){
    return this.mainForm.controls.emergencyData;
  }
  get billingForm(){
    return this.mainForm.controls.billingData;
  }
  get cardForm(){
    return this.mainForm.controls.cardData;
  }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-billing-data',
  templateUrl: './student-billing-data.component.html',
  styleUrls: ['./student-billing-data.component.scss']
})
export class StudentBillingDataComponent implements OnInit {
  @Output() setBillingGroup = new EventEmitter<FormGroup>();
  formBillingGroup = new FormGroup({
    socialName: new FormControl(null),
    rfc: new FormControl(null),
    country: new FormControl(null),
    state: new FormControl(null),
    city: new FormControl(null),
    address: new FormControl(null),
    colony: new FormControl(null),
    number: new FormControl(null),
    locality: new FormControl(null),
    postalCode: new FormControl(null),
    phone: new FormControl(null),
  });

  constructor() { }

  ngOnInit() {
  }

  next(){
    if(this.formBillingGroup.valid){
      this.setBillingGroup.emit(this.formBillingGroup);
    }else{
      this.formBillingGroup.markAllAsTouched();
    }
  }
}

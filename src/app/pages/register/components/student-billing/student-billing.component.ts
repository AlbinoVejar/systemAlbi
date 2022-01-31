import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-billing',
  templateUrl: './student-billing.component.html',
  styleUrls: ['./student-billing.component.scss']
})
export class StudentBillingComponent implements OnInit {
  @Output() sendBillingForm = new EventEmitter<FormGroup>();
  @Output() goBack = new EventEmitter<void>();
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

  public next(){
    if(this.formBillingGroup.valid){
      this.sendBillingForm.emit(this.formBillingGroup);
    }else{
      this.formBillingGroup.markAllAsTouched();
    }
  }
  public back(){
    this.goBack.emit();
  }
}

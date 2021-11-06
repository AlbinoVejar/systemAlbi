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
  });

  constructor() { }

  ngOnInit() {
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-student-parents',
  templateUrl: './student-parents.component.html',
  styleUrls: ['./student-parents.component.scss']
})
export class StudentParentsComponent implements OnInit {
  @Output() sendParentsForm = new EventEmitter<any>();
  @Output() goBack = new EventEmitter<number>();
  formParents = new FormGroup({
    fatherData: new FormGroup({
      names: new FormControl(null),
      phone: new FormControl(null),
      cellphone: new FormControl(null),
      address: new FormControl(null),
      colony: new FormControl(null),
      postal_code: new FormControl(null),
      country: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      job: new FormControl(null),
      job_address: new FormControl(null),
      job_phone: new FormControl(null),
      schedule: new FormControl(null),
    }), 
    motherData: new FormGroup({
      names: new FormControl(null),
      phone: new FormControl(null),
      cellphone: new FormControl(null),
      address: new FormControl(null),
      colony: new FormControl(null),
      postal_code: new FormControl(null),
      country: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      job: new FormControl(null),
      job_address: new FormControl(null),
      job_phone: new FormControl(null),
      schedule: new FormControl(null),
    }),
  });
  constructor() { }

  ngOnInit() {
  }

  public next() {
    if(this.formParents.valid){
      // const result = this.removeValueNull();
      this.sendParentsForm.emit(this.formParents.value);
    }else{
      this.formParents.markAllAsTouched();
    }
  }
  public back(){
    this.goBack.emit(1);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-parents',
  templateUrl: './student-parents.component.html',
  styleUrls: ['./student-parents.component.scss']
})
export class StudentParentsComponent implements OnInit {
  @Output() setParents = new EventEmitter<FormGroup>();
  @Output() goBack = new EventEmitter<void>();
  formParents = new FormGroup({
    fatherData: new FormGroup({
      names: new FormControl(null),
      mainPhoneNumber: new FormControl(null),
      phoneNumber: new FormControl(null),
      address: new FormControl(null),
      colony: new FormControl(null),
      postalCode: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      workData: new FormGroup({
        jobDescription: new FormControl(null),
        workPlace: new FormControl(null),
        workPhone: new FormControl(null),
        schedule: new FormControl(null),
      }),
    }), 
    motherData: new FormGroup({
      names: new FormControl(null),
      mainPhoneNumber: new FormControl(null),
      phoneNumber: new FormControl(null),
      address: new FormControl(null),
      colony: new FormControl(null),
      postalCode: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      workData: new FormGroup({
        jobDescription: new FormControl(null),
        workPlace: new FormControl(null),
        workPhone: new FormControl(null),
        schedule: new FormControl(null),
      }),
    }),
  });
  constructor() { }

  ngOnInit() {
  }
  public next() {
    if(this.formParents.valid){
      this.setParents.emit(this.formParents);
    }else{
      this.formParents.markAllAsTouched();
    }
  }
  public back(){
    this.goBack.emit();
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-emergency-data',
  templateUrl: './student-emergency-data.component.html',
  styleUrls: ['./student-emergency-data.component.scss']
})
export class StudentEmergencyDataComponent implements OnInit {
  @Output() setEmergencyGroup = new EventEmitter<FormGroup>();
  formEmergency = new FormGroup({
    family1: new FormGroup({
      name: new FormControl(null),
      typeFamily: new FormControl(null),
      phone: new FormControl(null),
    }),
    family2: new FormGroup({
      name: new FormControl(null),
      typeFamily: new FormControl(null),
      phone: new FormControl(null),
    }),
    family3: new FormGroup({
      name: new FormControl(null),
      typeFamily: new FormControl(null),
      phone: new FormControl(null),
    })
  });
  constructor() { }

  ngOnInit() {
  }

  public next() {
    if(this.formEmergency.valid){
      this.setEmergencyGroup.emit(this.formEmergency);
    }else{
      this.formEmergency.markAllAsTouched();
    }
  }

}

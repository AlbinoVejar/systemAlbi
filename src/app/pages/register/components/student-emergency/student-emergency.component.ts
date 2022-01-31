import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-emergency',
  templateUrl: './student-emergency.component.html',
  styleUrls: ['./student-emergency.component.scss']
})
export class StudentEmergencyComponent implements OnInit {
  @Output() sendEmergencyForm = new EventEmitter<FormGroup>();
  @Output() goBack = new EventEmitter<void>();
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
      this.sendEmergencyForm.emit(this.formEmergency);
    }else{
      this.formEmergency.markAllAsTouched();
    }
  }
  public back(){
    this.goBack.emit();
  }
}

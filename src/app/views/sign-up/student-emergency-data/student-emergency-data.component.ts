import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-emergency-data',
  templateUrl: './student-emergency-data.component.html',
  styleUrls: ['./student-emergency-data.component.scss']
})
export class StudentEmergencyDataComponent implements OnInit {
  @Output() setEmergencyGroup = new EventEmitter<FormGroup>();
  formEmergency = new FormGroup({
    family1: new FormGroup({
      
    })
  });
  constructor() { }

  ngOnInit() {
  }

}

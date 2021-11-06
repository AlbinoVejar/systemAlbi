import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-card-data',
  templateUrl: './student-card-data.component.html',
  styleUrls: ['./student-card-data.component.scss']
})
export class StudentCardDataComponent implements OnInit {
  @Output() setStudentCardGroup = new EventEmitter<FormGroup>();
  constructor() { }

  ngOnInit() {
  }

}

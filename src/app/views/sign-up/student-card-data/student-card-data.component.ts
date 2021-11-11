import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-card-data',
  templateUrl: './student-card-data.component.html',
  styleUrls: ['./student-card-data.component.scss']
})
export class StudentCardDataComponent implements OnInit {
  @Output() setStudentCardGroup = new EventEmitter<FormGroup>();
  formStudentCard = new FormGroup({
    tutor: new FormControl(''),
    phoneFather: new FormControl(''),
    phoneMother: new FormControl(''),
    phoneGrandparents: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

  next(){
    if(this.formStudentCard.valid){
      this.setStudentCardGroup.emit(this.formStudentCard);
    }else{
      this.formStudentCard.markAllAsTouched();
    }
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  @Output() sendStudentCardForm = new EventEmitter<FormGroup>();
  @Output() goBack = new EventEmitter<void>();
  formStudentCard = new FormGroup({
    names: new FormControl(''),
    phone_father: new FormControl(''),
    phone_mother: new FormControl(''),
    phone_grandparents: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

  public next(){
    if(this.formStudentCard.valid){
      this.sendStudentCardForm.emit(this.formStudentCard.value);
    }else{
      this.formStudentCard.markAllAsTouched();
    }
  }
  public back(){
    this.goBack.emit();
  }
}

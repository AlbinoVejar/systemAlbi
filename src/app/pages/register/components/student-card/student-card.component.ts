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
    tutor: new FormControl(''),
    phoneFather: new FormControl(''),
    phoneMother: new FormControl(''),
    phoneGrandparents: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

  public next(){
    if(this.formStudentCard.valid){
      this.sendStudentCardForm.emit(this.formStudentCard);
    }else{
      this.formStudentCard.markAllAsTouched();
    }
  }
  public back(){
    this.goBack.emit();
  }
}

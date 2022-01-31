import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.scss']
})
export class StudentMainComponent implements OnInit {
  @Output() sendMainForm = new EventEmitter<FormGroup>();
  mainForm: FormGroup = new FormGroup({
    yearSchool: new FormControl('', [Validators.required]),
    campus: new FormControl('', [Validators.required]),
    section: new FormControl('', [Validators.required]),
    grade: new FormControl('', [Validators.required]),
    studentData: new FormGroup({
      lastFirstName: new FormControl('', [Validators.required]),
      lastSecondName: new FormControl('', [Validators.required]),
      names: new FormControl('', [Validators.required]),
      sex: new FormControl(''),
      bornDate: new FormGroup({
        day: new FormControl(''),
        month: new FormControl(''),
        year: new FormControl(''),
      }),
      ubication: new FormGroup({
        bornPlace: new FormControl(''),
        address: new FormControl(''),
        col: new FormControl(''),
        postalCode: new FormControl(''),
        phone: new FormControl(''),
      }),
      curp: new FormControl(''),
      height: new FormControl(''),
      weight: new FormControl(''),
      bloodType: new FormControl(''),
      glasses: new FormControl(''),
      alergic: new FormControl(''),
      brothers: new FormControl(''),
      formStudentComplement: new FormGroup({
        lastSchoolName: new FormControl(null, Validators.required),
        brothersNames: new FormControl(null),
      }),
    }),
  });
  hasBrothers: boolean = false;
  constructor(
  ) { }

  ngOnInit() {
  }
  public next() {
    if(this.mainForm.valid){
      this.sendMainForm.emit(this.mainForm);
    }else{
      this.mainForm.markAllAsTouched();
    }
  }
}

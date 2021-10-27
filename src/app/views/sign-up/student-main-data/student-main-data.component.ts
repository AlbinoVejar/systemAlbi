import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/services/firebase.service';

@Component({
  selector: 'app-student-main-data',
  templateUrl: './student-main-data.component.html',
  styleUrls: ['./student-main-data.component.scss'],
})
export class StudentMainDataComponent implements OnInit {
  @Output() setFormGroup = new EventEmitter<FormGroup>();
  constructor(
    private serviceFirebase: FirebaseService,
  ) {}
  fromStudent = new FormGroup({
    yearSchool: new FormControl('', [Validators.required]),
    campus: new FormControl('', [Validators.required]),
    section: new FormControl('', [Validators.required]),
    grade: new FormControl('', [Validators.required]),
    studentData: new FormGroup({
      lastFirstName: new FormControl('', [Validators.required]),
      lastSecondName: new FormControl('', [Validators.required]),
      names: new FormControl('', [Validators.required]),
      sex: new FormControl('', [Validators.required]),
      bornDate: new FormGroup({
        day: new FormControl('', [Validators.required]),
        month: new FormControl('', [Validators.required]),
        year: new FormControl('', [Validators.required]),
      }),
      ubication: new FormGroup({
        bornPlace: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        col: new FormControl('', [Validators.required]),
        postalCode: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
      }),
      curp: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      bloodType: new FormControl('', [Validators.required]),
      glasses: new FormControl('', [Validators.required]),
      alergic: new FormControl('', [Validators.required]),
    }),
  });
  ngOnInit() {
    this.serviceFirebase.getAllStudents(true);
    // this.next();
  }

  public next() {
    if(this.fromStudent.valid){
      this.setFormGroup.emit(this.fromStudent);
    }else{
      this.fromStudent.markAllAsTouched();
    }
  }
}

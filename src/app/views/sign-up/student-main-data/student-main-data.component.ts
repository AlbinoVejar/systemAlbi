import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-main-data',
  templateUrl: './student-main-data.component.html',
  styleUrls: ['./student-main-data.component.scss']
})
export class StudentMainDataComponent implements OnInit {

  constructor() { }
  fromStudent = new FormGroup({
    yearSchool: new FormControl(''),
    campus: new FormControl(''),
    section: new FormControl(''),
    grade: new FormControl(''),
    studentData: new FormGroup({
      lastFirstName: new FormControl(''),
      lastSecondName: new FormControl(''),
      names: new FormControl(''),
      sex: new FormControl(''),
      bornDate: new FormGroup({
        day: new FormControl(''),
        month: new FormControl(''),
        year: new FormControl(''),
      }),
      bornPlace: new FormControl(''),
      address: new FormControl(''),
      col: new FormControl(''),
      postalCode: new FormControl(''),
      phone: new FormControl(''),
      curp: new FormControl(''),
      height: new FormControl(''),
      weight: new FormControl(''),
      bloodType: new FormControl(''),
      glasses: new FormControl(''),
      alergic: new FormControl(''),
    })
  });
  ngOnInit() {
  }

}

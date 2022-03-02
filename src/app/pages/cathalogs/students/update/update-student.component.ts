import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  form: FormGroup = new FormGroup({
    yearSchool: new FormControl(null, [Validators.required]),
    campus: new FormControl(null, [Validators.required]),
    section: new FormControl(null, [Validators.required]),
    grade: new FormControl(null, [Validators.required]),
    lastFirstName: new FormControl(null, [Validators.required]),
    lastSecondName: new FormControl(null, [Validators.required]),
    names: new FormControl(null, [Validators.required]),
    sex: new FormControl(null),
    bornDate: new FormGroup({
      day: new FormControl(null),
      month: new FormControl(null),
      year: new FormControl(null),
    }),
    bornPlace: new FormControl(null),
    address: new FormControl(null),
    col: new FormControl(null),
    postalCode: new FormControl(null),
    phone: new FormControl(null),
    curp: new FormControl(null),
    height: new FormControl(null),
    weight: new FormControl(null),
    bloodType: new FormControl(null),
    glasses: new FormControl(null),
    alergic: new FormControl(null),
    lastSchoolName: new FormControl(null),
    brothersNames: new FormControl(null),
    // #region Parents
    father: new FormGroup({
      names: new FormControl(null),
      phone: new FormControl(null),
      cellphone: new FormControl(null),
      address: new FormControl(null),
      colony: new FormControl(null),
      postal_code: new FormControl(null),
      country: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      job: new FormControl(null),
      job_address: new FormControl(null),
      job_phone: new FormControl(null),
      schedule: new FormControl(null),
    }),
    mother: new FormGroup({
      names: new FormControl(null),
      phone: new FormControl(null),
      cellphone: new FormControl(null),
      address: new FormControl(null),
      colony: new FormControl(null),
      postal_code: new FormControl(null),
      country: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      job: new FormControl(null),
      job_address: new FormControl(null),
      job_phone: new FormControl(null),
      schedule: new FormControl(null),
    }),
    // #endregion
    // #region ailments
    ailments: new FormGroup({
      has_deficit: new FormControl(null),
      use_medicine: new FormControl(null),
      medicines: new FormControl(null),
      info_vital: new FormControl(null),
    }),
    // #endregion

    // #region billing
    billing: new FormGroup({
      social_name: new FormControl(null),
      rfc: new FormControl(null),
      country: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      address: new FormControl(null),
      colony: new FormControl(null),
      address_number: new FormControl(null),
      locality: new FormControl(null),
      postal_code: new FormControl(null),
      phone: new FormControl(null),
    }),
    // #endregion
    // #region card
    card: new FormGroup({
      names: new FormControl(''),
      phone_father: new FormControl(''),
      phone_mother: new FormControl(''),
      phone_grandparents: new FormControl('')
    }),
    // #endregion

    // #region Emergency
    emergency: new FormGroup({}),
    // #endregion
  });

  campus: Array<any> = [];
  grades: Array<any> = [];
  sections: Array<any> = [];
  yearsSchool: Array<any> = [];
  day: Array<number> = [];
  month: Array<number> = [];
  years: Array<number> = [];
  countries: Array<any> = [];
  states: Array<any> = [];
  info = {
    countries: this.countries,
    states: this.states
  }
  constructor() { }

  ngOnInit() {
  }

  getFormGroup(group: string){
    return this.form.get(group);
  }
}

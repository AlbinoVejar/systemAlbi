import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Student } from 'src/models/student';
import { CathalogService } from 'src/services/cathalog.service';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    yearSchool: new FormControl(null, [Validators.required]),
    campus: new FormControl(null, [Validators.required]),
    section: new FormControl(null, [Validators.required]),
    grade: new FormControl(null, [Validators.required]),
    last_name_first: new FormControl(null, [Validators.required]),
    last_name_second: new FormControl(null, [Validators.required]),
    names: new FormControl(null, [Validators.required]),
    sex: new FormControl(null),
    born_date: new FormGroup({
      day: new FormControl(null),
      month: new FormControl(null),
      year: new FormControl(null),
    }),
    born_place: new FormControl(null),
    address: new FormControl(null),
    colony: new FormControl(null),
    postal_code: new FormControl(null),
    phone: new FormControl(null),
    curp: new FormControl(null),
    height: new FormControl(null),
    weight: new FormControl(null),
    blood_type: new FormControl(null),
    glasses: new FormControl(null),
    alergic: new FormControl(null),
    lastSchoolName: new FormControl(null),
    brothersNames: new FormControl(null),
    // #region Parents
    father: new FormGroup({
      id: new FormControl(null,Validators.required),
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
      id: new FormControl(null),
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
      id: new FormControl(null),
      has_deficit: new FormControl(null),
      use_medicine: new FormControl(null),
      medicines: new FormControl(null),
      info_vital: new FormControl(null),
    }),
    // #endregion

    // #region billing
    billing: new FormGroup({
      id: new FormControl(null),
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
      id: new FormControl(null),
      names: new FormControl(''),
      phone_father: new FormControl(''),
      phone_mother: new FormControl(''),
      phone_grandparents: new FormControl('')
    }),
    // #endregion

    // #region Emergency
    emergency: new FormArray([
      new FormGroup({
        id: new FormControl(null),
        id_student: new FormControl(null),
        names: new FormControl(''),
        family_relationship: new FormControl(''),
        phone: new FormControl(''),
      }),
      new FormGroup({
        id: new FormControl(null),
        id_student: new FormControl(null),
        names: new FormControl(''),
        family_relationship: new FormControl(''),
        phone: new FormControl(''),
      }),
      new FormGroup({
        id: new FormControl(null),
        id_student: new FormControl(null),
        names: new FormControl(''),
        family_relationship: new FormControl(''),
        phone: new FormControl(''),
      })
    ]),
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
  info = {}
  constructor(
    private arouter: ActivatedRoute,
    private router: Router,
    private sStudent: StudentService
  ) { }

  ngOnInit() {
    this.arouter.params.subscribe(e => {
      const {id: idStudent} = e;
      if(Number(idStudent) > 0){
        this.getStudent(idStudent);
      }else{
        this.router.navigateByUrl('/students');
      }
    });
  }

  getFormGroup(group: string){
    return this.form.get(group);
  }

  getFormArray(){
    const arr: FormArray = this.form.get("emergency")['controls'];
    return arr;
  }

  async getStudent(id: number){
    const data = await this.sStudent.GetStudent(id);
    if(await data){
      this.form.patchValue(await data);
      const {born_date} = await data;
      const day = this.form.get("born_date").get("day");
      const month = this.form.get("born_date").get("month");
      const year = this.form.get("born_date").get("year");
      const [_year,_month,_day] = born_date.split("/");
      day.setValue(_day);
      month.setValue(_month);
      year.setValue(_year);
    }
  }

  async UpdateStudent(){
    if(this.form.valid){
      const data = this.form.value;
      const date = `${data.born_date.year}/${data.born_date.month}/${data.born_date.day}`;
      const body: Student = data;
      body.born_date = date;
      const result = await this.sStudent.UpdateStudent(body);
      this.form.reset();
      this.getStudent(body.id);
    }
  }
}

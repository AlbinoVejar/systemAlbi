import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CathalogService } from 'src/services/cathalog.service';
import * as moment from 'moment';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.scss']
})
export class StudentMainComponent implements OnInit, OnDestroy {
  @Output() sendMainForm = new EventEmitter<object>();
  mainForm: FormGroup = new FormGroup({
    yearSchool: new FormControl(null, [Validators.required]),
    campus: new FormControl(null, [Validators.required]),
    section: new FormControl(null, [Validators.required]),
    grade: new FormControl(null, [Validators.required]),
    //Student
    lastFirstName: new FormControl(null, [Validators.required]),
    lastSecondName: new FormControl(null, [Validators.required]),
    names: new FormControl(null, [Validators.required]),
    sex: new FormControl(null),
    bornDate: new FormGroup({
      day: new FormControl(null),
      month: new FormControl(null),
      year: new FormControl(null),
    }),
    //Ubication
    bornPlace: new FormControl(null),
    address: new FormControl(null),
    col: new FormControl(null),
    postalCode: new FormControl(null),
    phone: new FormControl(null),
    //
    curp: new FormControl(null),
    height: new FormControl(null),
    weight: new FormControl(null),
    bloodType: new FormControl(null),
    glasses: new FormControl(null),
    alergic: new FormControl(null),
    lastSchoolName: new FormControl(null),
    brothersNames: new FormControl(null),
  });
  hasBrothers: boolean = false;
  campus: Array<any> = [];
  grades: Array<any> = [];
  sections: Array<any> = [];
  yearsSchool: Array<any> = [];
  day: Array<number> = [];
  month: Array<number> = [];
  years: Array<number> = [];
  constructor(
    private serviceCathalog: CathalogService,
  ) { }

  ngOnInit() {
    this.InitData().then(result => {});
  }
  ngOnDestroy(): void {
    this.mainForm.reset();
  }

  public next() {
    if(this.mainForm.valid){
      this.sendMainForm.emit(this.mainForm.value);
    }else{
      this.mainForm.markAllAsTouched();
    }
  }
  private async InitData(){
    await this.GetCatalogs();
    for (let i = 1985; i <= 2023; i++) {
      this.years.push(i)
    };
    for (let i = 1; i <= 12; i++) {
      this.month.push(i);
    }
    this.addDays(30);
  }
  public setDays(): void{
    if(this.yearForm.value != null &&
      this.monthForm.value != null){
        if(this.monthForm.value == 2){
          if(moment(this.yearForm.value).isLeapYear()){
            this.addDays(29);
          }else{
            this.addDays(28);
          }
        }else{
          if(this.monthForm.value == 4 ||
          this.monthForm.value == 6 ||
          this.monthForm.value == 9 ||
          this.monthForm.value == 11){
            this.addDays(30);
          }else{
            this.addDays(31);
          }
        }
    }else{
      this.day = [];
    }
  }
  private addDays(value: number): void{
    this.day = [];
    for (let i = 1; i <= value; i++) {
      this.day.push(i);
    }
  }
  //API Functions
  private async GetCampus(){
    const result = await this.serviceCathalog.GetCampus();
    this.campus = result;
  }
  private async GetGrades(){
    const result = await this.serviceCathalog.GetGrades();
    this.grades = result;
  }
  private async GetSections(){
    const result = await this.serviceCathalog.GetSections();
    this.sections = result;
  }
  private async GetYears(){
    const result = await this.serviceCathalog.GetYears();
    this.yearsSchool = result;
  }
  private async GetCatalogs(){
    const result = await this.serviceCathalog.GetCatalogs();
    console.log(await result)
  }
  //
  private get GetMainForm(){
    return this.mainForm.value;
  }
  private get yearForm(){
    return this.mainForm.get('bornDate').get('year');
  }
  private get monthForm(){
    return this.mainForm.get('bornDate').get('month');
  }
}

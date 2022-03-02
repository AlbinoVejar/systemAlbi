import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'inputs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() info: any = [];
  hasBrothers: boolean = false;
  campus: Array<any> = [];
  grades: Array<any> = [];
  sections: Array<any> = [];
  yearsSchool: Array<any> = [];
  day: Array<number> = [];
  month: Array<number> = [];
  years: Array<number> = [];
  constructor() { }

  ngOnInit() {
    this.campus = this.info.campus;
    this.grades = this.info.grades;
    this.sections = this.info.sections;
    this.yearsSchool = this.info.yearsSchool;
    this.day = this.info.day;
    this.month = this.info.month;
    this.years = this.info.years;
  }

  private addDays(value: number): void{
    this.day = [];
    for (let i = 1; i <= value; i++) {
      this.day.push(i);
    }
  }
  public setDays(): void {
    if (this.yearForm.value != null &&
      this.monthForm.value != null) {
      if (this.monthForm.value == 2) {
        if (moment(this.yearForm.value).isLeapYear()) {
          this.addDays(29);
        } else {
          this.addDays(28);
        }
      } else {
        if (this.monthForm.value == 4 ||
          this.monthForm.value == 6 ||
          this.monthForm.value == 9 ||
          this.monthForm.value == 11) {
          this.addDays(30);
        } else {
          this.addDays(31);
        }
      }
    } else {
      this.day = [];
    }
  }
  private get yearForm() {
    return this.form.get('bornDate').get('year');
  }
  private get monthForm() {
    return this.form.get('bornDate').get('month');
  }
}

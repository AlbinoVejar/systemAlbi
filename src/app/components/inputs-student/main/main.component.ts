import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CathalogService } from 'src/services/cathalog.service';
import { CustomStateService } from 'src/services/customState.service';

@Component({
  selector: 'inputs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() form: FormGroup;
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
    private serviceLocal: CustomStateService
  ) { }

  async ngOnInit() {
    this.initComponent();
  }

  initComponent(){
    const {campus, years, grades, sections} = this.serviceLocal.GetState();
    this.campus = campus;
    this.sections = sections;
    this.yearsSchool = years;
    this.grades = grades;
    for (let i = 1985; i <= 2023; i++) {
      this.years.push(i)
    };
    for (let i = 1; i <= 12; i++) {
      this.month.push(i);
    }
    this.addDays(30);
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
    return this.form.get('born_date').get('year');
  }
  private get monthForm() {
    return this.form.get('born_date').get('month');
  }
}

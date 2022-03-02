import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inputs-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() title: string;
  @Input() info: any;
  countries: Array<any> = [];
  states: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.countries = this.info.countries;
    this.states = this.info.states;
  }

}

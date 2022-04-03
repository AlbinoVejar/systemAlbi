import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { CustomStateService } from 'src/services/customState.service';

@Component({
  selector: 'inputs-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() title: string;
  countries: Array<any> = [];
  states: Array<any> = [];
  constructor(
    private serviceStorage: CustomStateService
  ) { }

  ngOnInit() {
    this.initData();
  }

  private initData(){
    const {states, countries} = this.serviceStorage.GetState();
    this.countries = countries;
    this.states = states;
  }

}

import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { CustomStateService } from 'src/services/customState.service';

@Component({
  selector: 'inputs-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  @Input() form: FormGroup;
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

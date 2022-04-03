import { CathalogService } from 'src/services/cathalog.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomStateService } from 'src/services/customState.service';

@Component({
  selector: 'app-parent-inputs',
  templateUrl: './parent-inputs.component.html',
  styleUrls: ['./parent-inputs.component.scss']
})
export class ParentInputsComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() title: string;
  countries: Array<any> = [];
  states: Array<any> = [];
  constructor(
    private serviceCathalogs: CathalogService,
    private serviceStorage: CustomStateService,
  ) { }

  ngOnInit() {
    this.InitData();
  }

  private InitData(){
    const {countries, states} = this.serviceStorage.GetState();
    this.countries = countries;
    this.states = states;
  }
}

import { CathalogService } from 'src/services/cathalog.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    private serviceCathalogs: CathalogService
  ) { }

  ngOnInit() {
    this.InitData();
  }

  private InitData(){
    this.GetCountries();
    this.GetStates();
  }

  private async GetCountries(){
    const result = await this.serviceCathalogs.GetCountries();
    this.countries = result;
  }

  private async GetStates(){
    const result = await this.serviceCathalogs.GetStates();
    this.states = result;
  }

}

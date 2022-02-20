import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CathalogService } from 'src/services/cathalog.service';

@Component({
  selector: 'app-student-billing',
  templateUrl: './student-billing.component.html',
  styleUrls: ['./student-billing.component.scss']
})
export class StudentBillingComponent implements OnInit {
  @Output() sendBillingForm = new EventEmitter<object>();
  @Output() goBack = new EventEmitter<void>();
  formBillingGroup = new FormGroup({
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
  });
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

  public next(){
    if(this.formBillingGroup.valid){
      this.sendBillingForm.emit(this.formBillingGroup.value);
    }else{
      this.formBillingGroup.markAllAsTouched();
    }
  }
  public back(){
    this.goBack.emit();
  }
}

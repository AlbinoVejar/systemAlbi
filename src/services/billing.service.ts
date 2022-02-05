import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Billing } from 'src/models/billing';
import { CustomService } from './custom.service';

@Injectable({
  providedIn: 'root'
})
export class BillingService extends CustomService{

  constructor(
    public http: HttpClient
  ) { 
    super("billing", http);
  }

  public async UpdateBilling(id_student: number, data: Billing){
    const result = await this.Update(id_student, data);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Billing } from 'src/models/billing';
import { CustomService } from './custom.service';

@Injectable({
  providedIn: 'root'
})
export class BillingService extends CustomService{

  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  public async UpdateBilling(id_student: number, data: Billing){
    try {
      await this.http.put(`${this.apiUrl}/billing/${id_student}`, data);
      return true;
    } catch (error) {
      return false;
    }
  }

}

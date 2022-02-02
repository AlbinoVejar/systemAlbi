import { Emergency } from './../models/emergency';
import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService extends CustomService{

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public async UpdateEmergency(id_student: number, data: Emergency){
    try {
      await this.http.put(`${this.apiUrl}/billing/${id_student}`, data);
      return true;
    } catch (error) {
      return false;
    }
  }

}

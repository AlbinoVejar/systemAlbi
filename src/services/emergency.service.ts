import { Emergency } from './../models/emergency';
import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService extends CustomService{
  constructor(
    public http: HttpClient
  ) {
    super("emergency", http);
  }

  public async UpdateEmergency(id_student: number, data: Emergency){
    const result = await this.Update(id_student, data);
  }

}

import { Ailments } from './../models/ailments';
import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AilmentService extends CustomService{

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public async UpdateAilment(id_student: number, ailment: Ailments){
    try {
      await this.http.put(`${this.apiUrl}/ailment/${id_student}`, ailment);
      return true;
    } catch (error) {
      return false;
    }
  }

}

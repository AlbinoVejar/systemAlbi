import { Parent } from './../models/parent';
import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParentService extends CustomService {

  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  public async UpdateParent(id_student: number, data: Parent){
    try {
      await this.http.put(`${this.apiUrl}/billing/${id_student}`, data);
      return true;
    } catch (error) {
      return false;
    }
  }
}

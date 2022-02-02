import { Card } from './../models/card';
import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService extends CustomService{

  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  public async UpdateCard(id_student: number, data: Card){
    try {
      await this.http.put(`${this.apiUrl}/card/${id_student}`, data);
      return true;
    } catch (error) {
      return false;
    }
  }

}

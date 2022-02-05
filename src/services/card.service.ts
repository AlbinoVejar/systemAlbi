import { Card } from './../models/card';
import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService extends CustomService{

  constructor(
    public http: HttpClient
  ) { 
    super("card", http);
  }

  public async UpdateCard(id_student: number, data: Card){
    const result = await this.Update(id_student, data);
  }

}

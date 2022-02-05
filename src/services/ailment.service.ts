import { Ailments } from './../models/ailments';
import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AilmentService extends CustomService{

  constructor(
    public http: HttpClient
  ) {
    super("ailments", http);
  }

  public async UpdateAilment(id_student: number, data: Ailments){
    const result = await this.Update(id_student, data);
  }

}

import { Parent } from './../models/parent';
import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParentService extends CustomService {

  constructor(
    public http: HttpClient
  ) { 
    super("parent", http);
  }

  public async UpdateParent(id_student: number, data: Parent){
    const result = await this.Update(id_student, data);
  }
}

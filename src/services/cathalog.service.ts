import { CustomService } from './custom.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CathalogService{

  constructor(
    public http: HttpClient
  ) { 
  }

  public async GetSections(){
    const cs = new CustomService("sections", this.http);
    return await cs.GetAll();
  }
  public async GetGrades(){
    const cs = new CustomService("grades", this.http);
    return await cs.GetAll();
  }
  public async GetYears(){
    const cs = new CustomService("yearsSchool", this.http);
    return await cs.GetAll();
  }
}

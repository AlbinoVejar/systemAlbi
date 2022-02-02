import { CustomService } from './custom.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CathalogService extends CustomService{

  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  public async GetSections(){
    try {
      const result = await this.http.get(`${this.apiUrl}/sections`);
      return result;
    } catch (error) {
      return [];
    }
  }
  public async GetGrades(){
    try {
      const result = await this.http.get(`${this.apiUrl}/grades`);
      return result;
    } catch (error) {
      return [];
    }
  }
  public async GetYears(){
    try {
      const result = await this.http.get(`${this.apiUrl}/yearSchool`);
      return result;
    } catch (error) {
      return [];
    }
  }
}

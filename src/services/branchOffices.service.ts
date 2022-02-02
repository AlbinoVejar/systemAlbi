import { BranchOffice } from './../models/branchOffice';
import { CustomService } from './custom.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficesService extends CustomService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public async GetBranchOffice(id_student: number){
    try {
      await this.http.get(`${this.apiUrl}/branch_office/${id_student}`);
      return true;
    } catch (error) {
      return false;
    }
  }
  public async GetBranchOffices(data){
    try {
      await this.http.get(`${this.apiUrl}/branch_office`);
      return true;
    } catch (error) {
      return false;
    }
  }
  public async StoreBranchOffice(data){
    try {
      await this.http.post(`${this.apiUrl}/branch_office`, data);
      return true;
    } catch (error) {
      return false;
    }
  }
  public async UpdateBranchOffice(id_branch, data){
    try {
      await this.http.put(`${this.apiUrl}/branch_office/${id_branch}`, data);
      return true;
    } catch (error) {
      return false;
    }
  }
  public async DeleteBranchOffice(id_student){
    try {
      await this.http.delete(`${this.apiUrl}/branch_office/${id_student}`);
      return true;
    } catch (error) {
      return false;
    }
  }
}

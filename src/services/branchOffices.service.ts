import { BranchOffice } from './../models/branchOffice';
import { CustomService } from './custom.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficesService extends CustomService {
  constructor(
    public http: HttpClient
  ) {
    super("branch_office", http);
  }

  public async GetBranchOffice(id_student: number){
    const result = await this.GetOne(id_student)
  }
  public async GetBranchOffices(){
    const result = await this.GetAll("branches");
  }
  public async StoreBranchOffice(data){
    const result = await this.Store(data);
  }
  public async UpdateBranchOffice(id_branch, data){
    const result = await this.Update(id_branch, data);
  }
  public async DeleteBranchOffice(id_branch){
    const result = await this.Delete(id_branch);
  }
}

import { HttpClient } from '@angular/common/http';
import { Student } from './../models/student';
import { CustomService } from './custom.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends CustomService {
  constructor(
    public http: HttpClient
  ) {
    super("student", http);
  }

  // public async GetStudent(student: Student){
  //   return await this.GetOne(student.id);
  // }

  public async GetStudent(id: number){
    return await this.GetOne(id);
  }

  public async GetStudents(){
    const result = await this.GetAll("students");
    return result;
  }

  public async StoreStudent(student: Student){
    console.log(student, 'data');
    const result = await this.Store(student);
    console.log(result, 'return');
    return await result;
  }

  public async UpdateStudent(student: Student){
    console.log(student);
    const result = await this.Update(student.id, student);
    return await result;
  }

  public async DeleteStudent(id: number){
    const result = await this.Delete(id);
    return await result;
  }
}

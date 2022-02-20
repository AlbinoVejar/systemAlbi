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

  public async GetStudent(student: Student){
    const result = await this.GetOne(student.id);
  }

  public async GetStudents(student: Student){
    const result = await this.GetAll();
  }

  public async StoreStudent(student: Student){
    console.log(student, 'data');
    const result = await this.Store(student);
    console.log(result, 'return');
    return await result;
  }

  public async UpdateStudent(student: Student){
    const result = await this.Update(student.id, student);
  }

  public async DeleteStudent(student: Student){
    const result = await this.Delete(student.id);
  }
}

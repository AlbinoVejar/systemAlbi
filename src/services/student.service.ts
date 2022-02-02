import { Student } from './../models/student';
import { CustomService } from './custom.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends CustomService {
  
  constructor() {
    super();
  }

  public GetStudent(student: Student): Student{
    return new Student();
  }

  public GetStudents(student: Student): Array<Student>{
    return [];
  }

  public StoreStudent(student: Student): boolean{
    return true;
  }

  public UpdateStudent(student: Student): boolean{
    return true;
  }

  public DeleteStudent(student: Student): boolean{
    return true;
  }
}

import { Router } from '@angular/router';
import { ConstanciaService } from './../../../../services/pdfs/constancia.service';
import { CarnetService } from './../../../../services/pdfs/carnet.service';
import { ModalStudentComponent } from '../../../modals/modal-student/modal-student.component';
import { Student } from './../../../../models/student';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/services/student.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  lstStudents: Array<Student> = [];
  constructor(
    private serviceStudent: StudentService,
    private modalService: NgbModal,
    private carnetService: CarnetService,
    private constanciaService: ConstanciaService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.GetStudents();
  }

  private async GetStudents(){
    const result = await this.serviceStudent.GetStudents();
    this.lstStudents = await result;
  }

  public showModal(student: Student, modeEdit = false){
    const modalRef = this.modalService.open(ModalStudentComponent, {centered: true, size: 'xl', scrollable: true});
    modalRef.componentInstance.modeEdit = modeEdit;
    modalRef.componentInstance.student = student;
  }

  private async GetStudent(student: Student){
    return await this.serviceStudent.GetStudent(student.id);
  }

  public async ShowStudent(student: Student){
    if(student.id > 0){
      const result = await this.GetStudent(student);
      result && this.showModal(result);
    }
  }

  public PrintCarnet(){
    this.carnetService.createCarnet();
  }

  public PrintConstancia(){
    this.constanciaService.createFolio();
  }

  EditStudent(id: number){
    this.router.navigateByUrl(`/alumno/${id}`);
  }
}

import { Router } from '@angular/router';
import { Student } from '../../../models/student';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-student',
  templateUrl: './modal-student.component.html',
  styleUrls: ['./modal-student.component.scss']
})
export class ModalStudentComponent implements OnInit {
  @Input() student: Student;
  @Input() modeEdit: boolean = false;
  mainCollapse: boolean = false;
  constructor(
    public activeModal: NgbActiveModal,
    private router: Router
  ) { }

  ngOnInit() {
  }

  EditStudent(){
    this.router.navigateByUrl(`/alumno/${this.student.id}`);
    this.activeModal.close();
  }
}

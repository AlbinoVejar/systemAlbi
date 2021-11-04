import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-ailments',
  templateUrl: './student-ailments.component.html',
  styleUrls: ['./student-ailments.component.scss']
})
export class StudentAilmentsComponent implements OnInit {
  @Output() setAilmentsGroup = new EventEmitter<FormGroup>();
  formAilments = new FormGroup({
    isDeficit: new FormControl(null, Validators.required),
    useMedicine: new FormControl(null, Validators.required),
    medicines: new FormControl(null),
    infomationAboutStudent: new FormControl(null),
  });
  formStudentComplement = new FormGroup({
    lastSchoolName: new FormControl(null, Validators.required),
    brothersNames: new FormControl(null),
  })
  formParents = new FormGroup({
    fatherData: new FormGroup({
      names: new FormControl(null),
      mainPhoneNumber: new FormControl(null),
      phoneNumber: new FormControl(null),
      address: new FormControl(null),
      colony: new FormControl(null),
      postalCode: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      job: new FormControl(null),
      workPlace: new FormControl(null),
      workPhone: new FormControl(null),
      schedule: new FormControl(null)
    })
  })
  constructor() { }

  ngOnInit() {
  }

}

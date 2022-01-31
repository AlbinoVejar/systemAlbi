import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-ailments',
  templateUrl: './student-ailments.component.html',
  styleUrls: ['./student-ailments.component.scss']
})
export class StudentAilmentsComponent implements OnInit {
  @Output() setAilmentsGroup = new EventEmitter<FormGroup>();
  @Output() goBack = new EventEmitter<void>();
  formAilments = new FormGroup({
    isDeficit: new FormControl(null, Validators.required),
    useMedicine: new FormControl(null, Validators.required),
    medicines: new FormControl(null),
    informationAboutStudent: new FormControl(null),
  });
  constructor() { }

  ngOnInit() {
  }

  public next() {
    if(this.formAilments.valid){
      this.setAilmentsGroup.emit(this.formAilments);
    }else{
      this.formAilments.markAllAsTouched();
    }
  }
  public back(){
    this.goBack.emit();
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-ailments',
  templateUrl: './student-ailments.component.html',
  styleUrls: ['./student-ailments.component.scss']
})
export class StudentAilmentsComponent implements OnInit {
  @Output() sendAilmentsForm = new EventEmitter<any>();
  @Output() goBack = new EventEmitter<void>();
  formAilments = new FormGroup({
    has_deficit: new FormControl(null),
    use_medicine: new FormControl(null),
    medicines: new FormControl(null),
    info_vital: new FormControl(null),
  });
  constructor() { }

  ngOnInit() {
  }

  public next() {
    if(this.formAilments.valid){
      this.sendAilmentsForm.emit(this.formAilments.value);
    }else{
      this.formAilments.markAllAsTouched();
    }
  }
  public back(){
    this.goBack.emit();
  }

}

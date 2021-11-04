import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/services/alert.service';
import { FirebaseService } from 'src/services/firebase.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false },
  },
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }]
})
export class SignUpComponent implements OnInit {
  mainForm = new FormGroup({
  });
  constructor(
    private serviceFirebase: FirebaseService,
    private serviceAlerts: AlertService,
  ) { }

  ngOnInit(): void {
  }
  getFormStudentData(data: FormGroup, stepper: MatStepper){
    if(data){
      stepper.next();
    }
  }

  getFormAilmentsData(data: FormGroup, stepper: MatStepper){
    if(data){
      stepper.next();
    }
  }

  private async postStudent(data: any){
    const result = await this.serviceFirebase.storeStudent(data);
    if(result){
      this.serviceAlerts.ShowToastSuccess('Exito','Alumno Registrado con Exito');
    }else{
      this.serviceAlerts.ErrorAlert('Error', 'Ocurrió un error al guardar');
    }
  }
}

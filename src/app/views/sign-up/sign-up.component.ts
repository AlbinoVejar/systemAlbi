import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  //#region OUTPUT View
  getFormStudentData(data: FormGroup, stepper: MatStepper){
    if(data){
      this.mainForm.addControl('studentData',data);
      stepper.next();
    }
  }

  getFormAilmentsData(data: FormGroup, stepper: MatStepper){
    if(data){
      this.mainForm.addControl('ailmentsData',data);
      stepper.next();
    }
  }

  getFormEmergencyData(data: FormGroup, stepper: MatStepper){
    if(data){
      this.mainForm.addControl('emergencyData',data);
      stepper.next();
    }
  }

  getFormBillingData(data: FormGroup, stepper: MatStepper){
    if(data){
      this.mainForm.addControl('billingData',data);
      stepper.next();
    }
  }

  async getFormStudentCardData(data: FormGroup){
    if(data){
      this.mainForm.addControl('cardData',data);
      const result = await this.serviceAlerts.ConfirmAlert("Confirmar Acción", "¿Está seguro que desea continuar?");
      result
        ? await this.postStudent()
        : null;
    }
  }
  //#endregion

  private async postStudent(){
    const result = await this.serviceFirebase.storeStudent(this.mainForm.value);
    if(result){
      this.serviceAlerts.ShowToastSuccess('Exito','Alumno Registrado con Exito');
    }else{
      this.serviceAlerts.ErrorAlert('Error', 'Ocurrió un error al guardar');
    }
  }

  //#region GETS CONTROLS FORM
  get getMainDataForm(){
    return this.mainForm.controls.studentData;
  }
  get getAilmentsDataForm(){
    return this.mainForm.controls.ailmentsData;
  }
  get getEmergencyDataForm(){
    return this.mainForm.controls.emergencyData;
  }
  get getBillingDataForm(){
    return this.mainForm.controls.billingData;
  }
  get getCardDataForm(){
    return this.mainForm.controls.cardData;
  }
  //#endregion

}

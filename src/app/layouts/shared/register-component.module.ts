import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Components READONLY
import { AilmentsComponent } from 'src/app/components/inputs-readonly-student/ailments/ailments.component';
import { BillingComponent } from 'src/app/components/inputs-readonly-student/billing/billing.component';
import { CardComponent } from 'src/app/components/inputs-readonly-student/card/card.component';
import { EmergencyComponent } from 'src/app/components/inputs-readonly-student/emergency/emergency.component';
import { ParentsComponent } from 'src/app/components/inputs-readonly-student/parents/parents.component';
import { MainComponent } from 'src/app/components/inputs-readonly-student/main/main.component';
//Components EDIT
import { AilmentsComponent as AilmentsComponent_EDIT } from 'src/app/components/inputs-student/ailments/ailments.component';
import { BillingComponent as BillingComponent_EDIT } from 'src/app/components/inputs-student/billing/billing.component';
import { CardComponent as CardComponent_EDIT } from 'src/app/components/inputs-student/card/card.component';
import { EmergencyComponent as EmergencyComponent_EDIT } from 'src/app/components/inputs-student/emergency/emergency.component';
import { ParentsComponent as ParentsComponent_EDIT } from 'src/app/components/inputs-student/parents/parents.component';
import { MainComponent as MainComponent_EDIT } from 'src/app/components/inputs-student/main/main.component';

const components = [
  AilmentsComponent,
  BillingComponent,
  CardComponent,
  EmergencyComponent,
  ParentsComponent,
  MainComponent,
  AilmentsComponent_EDIT,
  BillingComponent_EDIT,
  CardComponent_EDIT,
  EmergencyComponent_EDIT,
  ParentsComponent_EDIT,
  MainComponent_EDIT
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    components
  ],
  declarations: [
    components
  ],
})
export class RegisterComponentsModule { }

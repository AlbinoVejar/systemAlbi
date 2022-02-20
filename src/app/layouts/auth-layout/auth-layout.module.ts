import { EmergencyInputsComponent } from './../../pages/register/components/student-emergency/components/emergency-inputs/emergency-inputs.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { StudentAilmentsComponent } from 'src/app/pages/register/components/student-ailments/student-ailments.component';
import { StudentBillingComponent } from 'src/app/pages/register/components/student-billing/student-billing.component';
import { StudentEmergencyComponent } from './../../pages/register/components/student-emergency/student-emergency.component';
import { StudentCardComponent } from 'src/app/pages/register/components/student-card/student-card.component';
import { StudentMainComponent } from './../../pages/register/components/student-main/student-main.component';
import { StudentParentsComponent } from 'src/app/pages/register/components/student-parents/student-parents.component';
import { ParentInputsComponent } from 'src/app/pages/register/components/student-parents/parent-inputs/parent-inputs.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    TabsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    StudentAilmentsComponent,
    StudentBillingComponent,
    StudentCardComponent,
    StudentEmergencyComponent,
    StudentMainComponent,
    StudentParentsComponent,
    ParentInputsComponent,
    EmergencyInputsComponent,
  ]
})
export class AuthLayoutModule { }

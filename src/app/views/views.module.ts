import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentAilmentsComponent } from './sign-up/student-ailments/student-ailments.component';
import { StudentEmergencyDataComponent } from './sign-up/student-emergency-data/student-emergency-data.component';
import { StudentBillingDataComponent } from './sign-up/student-billing-data/student-billing-data.component';
import { StudentMainDataComponent } from './sign-up/student-main-data/student-main-data.component';
import { StudentCardDataComponent } from './sign-up/student-card-data/student-card-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './../shared/components/sidebar/sidebar.component';
import { ToolbarComponent } from './../shared/components/toolbar/toolbar.component';
import { FooterComponent } from './../shared/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ViewsComponent,
    SignUpComponent,
    StudentMainDataComponent,
    StudentAilmentsComponent,
    StudentEmergencyDataComponent,
    StudentBillingDataComponent,
    StudentCardDataComponent,
    DashboardComponent,
    SideBarComponent,
    ToolbarComponent,
    FooterComponent
  ]
})
export class ViewsModule { }

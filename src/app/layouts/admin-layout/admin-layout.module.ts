import { NgxSpinnerModule } from 'ngx-spinner';
import { StudentsComponent } from './../../pages/cathalogs/students/students.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { NgbCollapseModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpdateStudentComponent } from 'src/app/pages/cathalogs/update-student/update-student.component';
import { RegisterComponentsModule } from '../shared/register-component.module';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgbModalModule,
    NgbCollapseModule,
    RegisterComponentsModule,
    TabsModule,
    NgxSpinnerModule,
  ],
  declarations: [
    DashboardComponent,
    StudentsComponent,
    UpdateStudentComponent,
  ]
})

export class AdminLayoutModule {}

import { StudentsComponent } from './../../pages/cathalogs/students/students.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { UpdateStudentComponent } from 'src/app/pages/cathalogs/update-student/update-student.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'students', component: StudentsComponent},
    { path: 'student/:id', component: UpdateStudentComponent},
    { path: 'alumnos', component: StudentsComponent},
    { path: 'alumno/:id', component: UpdateStudentComponent},
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewsComponent } from './views.component';


const routes: Routes = [
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: "", component: ViewsComponent,
    children: [
      {
        path: '', component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }

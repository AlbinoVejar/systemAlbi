import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './views/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '/', pathMatch: 'full', children: [
      { path: 'signUp', pathMatch: 'full', component: SignUpComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

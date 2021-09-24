import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './views/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/views-routing.module').then(m => m.ViewsRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

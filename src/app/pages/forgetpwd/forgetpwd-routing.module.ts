import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpwdComponent } from './forgetpwd.component';

const routes: Routes = [
  {path:'', component: ForgetpwdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetpwdRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetpwdComponent } from './resetpwd.component';

const routes: Routes = [
  {path:'', component: ResetpwdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetpwdRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {path: 'login', loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule)},
  {path: 'forgetpwd', loadChildren: () => import("./pages/forgetpwd/forgetpwd.module").then(m => m.ForgetpwdModule)},
  {path: 'resetpwd', loadChildren: () => import("./pages/resetpwd/resetpwd.module").then(m => m.ResetpwdModule)},
  {
    path: 'dashboard',
    loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule),
    canMatch: [AuthService]
  },
  //{path: '', redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
